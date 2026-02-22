/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { G_Sync_Provider } from './moduly/G_Sync_Synchronizace';

const App: React.FC = () => {
  return (
    <G_Sync_Provider>
      <div className="min-h-screen bg-[#300a24] flex flex-col items-center justify-center p-5 text-white font-sans">
        <div className="bg-[#e95420]/10 backdrop-blur-md rounded-2xl border border-[#e95420]/30 p-8 w-full max-w-[350px] text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <h1 className="text-[#e95420] text-3xl font-bold mb-2.5">AISS-OS</h1>
          <p className="text-sm opacity-80">
            Systémová Správa Modulů 2026
          </p>
          <hr className="border-t border-[#e95420]/50 my-5" />
          <div className="text-xs text-left space-y-1">
            <p>STAV: INICIALIZACE...</p>
            <p>HW: Xiaomi 13T Pro OK</p>
            <p>REFRESH: 144Hz READY</p>
          </div>
        </div>
      </div>
    </G_Sync_Provider>
  );
};

export default App;
