import React, { useRef, useEffect, useState } from 'react';
import { Icon, Button } from 'framework7-react';
import { HugeiconsIcon } from '@hugeicons/react';
import * as HI from '@hugeicons/core-free-icons';

/**
 * DropdownMenu
 * @param {Object[]} options - Array of { key, label, icon, description }
 * @param {Function} onSelect - Called with option.key when selected
 * @param {string} [buttonLabel] - Optional label for the trigger button
 * @param {React.ReactNode} [buttonIcon] - Optional icon for the trigger button
 */
const DropdownMenu = ({ options, onSelect, buttonLabel, buttonIcon }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button
        small
        style={{ minWidth: 32, height: 32, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={e => {
          e.stopPropagation();
          setOpen(v => !v);
        }}
      >
        {buttonIcon || <HugeiconsIcon icon={HI.MoreVerticalIcon} size={20} />}
        {buttonLabel}
      </Button>
      <div
        ref={menuRef}
        style={{
          display: open ? 'block' : 'none',
          position: 'absolute',
          right: 0,
          top: 36,
          background: '#222',
          color: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
          minWidth: 140,
            zIndex: 9999,
          padding: '8px 8px',
        }}
      >
        {options.map(opt => (
          <div
            key={opt.key}
            className="dropdown-menu-option"
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 2,
              transition: 'background 0.2s, color 0.2s, border-radius 0.2s',
              borderRadius: '8px',
            }}
            onClick={() => { onSelect(opt.key); setOpen(false); }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#444';
              e.currentTarget.style.color = '#ffe066';
              e.currentTarget.style.borderRadius = '8px';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '';
              e.currentTarget.style.color = '';
              e.currentTarget.style.borderRadius = '8px';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {opt.icon && <HugeiconsIcon icon={opt.icon} size={18} />}
              <span>{opt.label}</span>
            </div>
            {opt.description && <span style={{ color: '#aaa', fontSize: 12, marginTop: 2 }}>{opt.description}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
