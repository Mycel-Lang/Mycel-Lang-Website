'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {AlertTriangle, LucideFileWarning, LucideTriangleAlert} from 'lucide-react';
import dynamic from 'next/dynamic';
import { WIPModal } from '@/components/ui/WIPModal';

const DynamicWIPModal = dynamic(() => import('@/components/ui/WIPModal').then(mod => mod.WIPModal), { ssr: false });
import { AnimateInView } from '@/components/AnimateInView';

export function HeroSection() {
  const [isWipModalOpen, setIsWipModalOpen] = useState(false);

  const handleWipClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWipModalOpen(true);
  };

  return (
    <section className="min-h-screen flex items-center bg-mantle border-b border-bedrock w-full relative">
      <AnimateInView>
        <div className="max-w-5xl mx-auto px-4 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-mycelium leading-tight mb-4">
            Mycel: Form is Function.
          </h1>
          <p className="text-lg md:text-xl text-loam max-w-3xl mx-auto mb-8">
            The Markup Language for Serious Documentation. Unambiguous syntax,
            powerful WASM plugins, and a secure, predictable ecosystem.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/under-construction" passHref>
              <button className="btn btn--primary">Get Started</button>
            </Link>
            <button className="btn btn--secondary flex items-center gap-2" >
              <Link href="/style-guide">
                  Style Guide
              </Link>
            </button>
              <button className="btn  flex items-center " onClick={handleWipClick}>
                  <AlertTriangle color="#B45B5B"/>
              </button>
          </div>
        </div>
      </AnimateInView>
      <DynamicWIPModal isOpen={isWipModalOpen} onClose={() => setIsWipModalOpen(false)} />
    </section>
  );
}