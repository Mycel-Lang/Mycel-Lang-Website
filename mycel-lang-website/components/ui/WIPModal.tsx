'use client';

import React from 'react';
import {AlertTriangle} from 'lucide-react';
import {ModalOverlay} from './ModalOverlay';

interface WIPModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WIPModal: React.FC<WIPModalProps> = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay isOpen={isOpen} onClose={onClose}>
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-substrate border border-bedrock rounded-lg shadow-xl w-full max-w-md m-4 p-6 animate-in zoom-in-95 duration-300"
            >
                <div className="bg-substrate">
                    <div className="flex items-start gap-4">
                        <div

                            className="size-12 flex-shrink-0 rounded-full bg-crust flex items-center justify-center border border-bedrock">
                            <AlertTriangle className="size-6 text-warning"/>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-humus">Under Development</h3>
                            <p className="text-sm text-loam mt-2">
                                This section is in a very early stage of development. Nothing here is finalized, and no
                                guarantees can be made about its current state.
                            </p>
                            <p className="text-sm text-loam mt-2">
                                We are working to get the language out as fast as possible. Please stay tuned for
                                updates!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                        <button onClick={onClose} className="btn btn--primary">Acknowledge</button>
                    </div>
                </div>
            </div>
        </ModalOverlay>

    );
};
