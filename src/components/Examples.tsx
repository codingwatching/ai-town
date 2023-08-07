'use client';
import { useState } from 'react';
import Chats from './Chats';
import Game from './Game';
import { Player } from '../../convex/types';

export default function Examples() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>();

  return (
    <>
      <div className="mx-auto min-h-screen w-full max-w grow lg:flex xl:px-2 mt-7">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6 bg-slate-50">
            <Game setSelectedPlayer={setSelectedPlayer} />
          </div>
        </div>

        <div className="flex flex-col shrink-0 border-t border-gray-200 px-4 py-6 sm:px-6 lg:w-96 lg:border-l lg:border-t-0 lg:pr-8 xl:pr-6 bg-slate-300 space-y-11">
          {/* Right column area */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-neutral-700">
            Conversations
          </h1>
          <Chats playerState={selectedPlayer} />
        </div>
      </div>
    </>
  );
}
