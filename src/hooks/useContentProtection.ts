import { useEffect } from 'react';

export const useContentProtection = () => {
  useEffect(() => {
    // 1. Block Global Right-Click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Block Inspect Element Hotkeys
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+I (Inspect)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }

      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Dynamic Selection & Copy Block (Restored automatically on cleanup / admin page entry)
    const prevUserSelect = document.body.style.userSelect;
    const prevWebkitSelect = document.body.style.webkitUserSelect;
    
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    // 4. Glowing Brand console warning (Easter Egg)
    try {
      console.clear();
      console.log(
        '%c🔒 THE ZAMORA ROOM - COFFEE LAB %c\n\nAll digital assets, menus, media, and source code are proprietary and protected.\nUnauthorized duplication or inspection is prohibited.\n',
        'font-family: "Bebas Neue", "Impact", sans-serif; font-size: 24px; color: #c8962a; font-weight: bold; background: #0a0a0a; padding: 10px 20px; border-radius: 6px; border: 1px solid rgba(200,150,42,0.3);',
        'font-family: "DM Sans", sans-serif; font-size: 13px; color: #8a8275; line-height: 1.5;'
      );
    } catch (e) {}

    // 5. DevTools Debugger loop (Disabled on localhost to avoid freezing your own local workspace development)
    let debuggerInterval: any;
    const isLocalhost = 
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' || 
      window.location.protocol === 'file:';

    if (!isLocalhost) {
      debuggerInterval = setInterval(() => {
        try {
          (function() {}).constructor('debugger')();
        } catch (err) {}
      }, 500);
    }

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restore text selection capability in other areas (like admin layout)
      document.body.style.userSelect = prevUserSelect;
      document.body.style.webkitUserSelect = prevWebkitSelect;
      
      if (debuggerInterval) {
        clearInterval(debuggerInterval);
      }
    };
  }, []);
};
