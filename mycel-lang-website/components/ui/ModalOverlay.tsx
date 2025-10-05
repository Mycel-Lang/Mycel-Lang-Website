'use client';

import React from 'react';

interface ModalOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-sm animate-in fade-in-50 z-50"
            onClick={onClose}
        >
            {children}
        </div>
    );
};
