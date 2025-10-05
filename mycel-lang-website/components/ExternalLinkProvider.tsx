'use client';

import React, {useState, useEffect, useCallback, useRef} from 'react';
import {ArrowUpRight, AlertTriangle} from 'lucide-react';
import {ModalOverlay} from "@/components/ui/ModalOverlay";

// The Modal UI Component
const ExternalLinkModal = ({
                               isOpen,
                               onClose,
                               onConfirm,
                               href
                           }: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    href: string;
}) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-mantle border border-bedrock rounded-lg shadow-xl w-full max-w-md m-4 p-6 animate-in zoom-in-95 duration-300"
            >
                <div className="flex items-start gap-4">
                    <div
                        className="size-12 flex-shrink-0 rounded-full bg-crust flex items-center justify-center border border-bedrock">
                        <AlertTriangle className="size-6 text-warning"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-humus">External Link</h3>
                        <p className="text-sm text-loam mt-1">
                            You are about to navigate to a third-party website. Do you want to proceed?
                        </p>
                        <p className="text-xs text-indigo font-mono mt-2 truncate bg-crust p-2 rounded">
                            {href}
                        </p>
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                    <button onClick={onClose} className="btn btn--secondary">Cancel</button>
                    <button onClick={onConfirm} className="btn btn--primary">Proceed</button>
                </div>
            </div>
        </ModalOverlay>

    );
};

// The Provider Component with the hook logic inside
export function ExternalLinkProvider({children}: { children: React.ReactNode }) {
    const [modalState, setModalState] = useState({isOpen: false, href: ''});

    const handleLinkClick = useCallback((event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const link = target.closest('a');

        if (link && link.href && link.target !== '_self') {
            const currentHost = window.location.hostname;
            const linkHost = new URL(link.href).hostname;

            if (linkHost !== currentHost) {
                event.preventDefault();
                setModalState({isOpen: true, href: link.href});
            }
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleLinkClick);
        return () => {
            document.removeEventListener('click', handleLinkClick);
        };
    }, [handleLinkClick]);

    const handleClose = () => {
        setModalState({isOpen: false, href: ''});
    };

    const handleConfirm = () => {
        if (modalState.href) {
            window.open(modalState.href, '_blank', 'noopener,noreferrer');
        }
        handleClose();
    };

    return (
        <>
            {children}
            <ExternalLinkModal
                isOpen={modalState.isOpen}
                onClose={handleClose}
                onConfirm={handleConfirm}
                href={modalState.href}
            />
        </>
    );
}
