/* @ds-bundle: {"format":3,"namespace":"GraciousFoundationInternationalDesignSystem_e98c68","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f34525f7e7d0","components/core/Badge.jsx":"ddf0eda32ec5","components/core/Button.jsx":"a38675bb30b5","components/core/Card.jsx":"6fd387a56758","components/core/Input.jsx":"3097346fb93d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GraciousFoundationInternationalDesignSystem_e98c68 = window.GraciousFoundationInternationalDesignSystem_e98c68 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * GFI Avatar — person display with photo or initials fallback.
 * sizes: xs | sm | md | lg | xl
 */
function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  variant = 'teal',
  style: extraStyle
}) {
  const sizes = {
    xs: {
      width: '28px',
      height: '28px',
      fontSize: '10px'
    },
    sm: {
      width: '36px',
      height: '36px',
      fontSize: '12px'
    },
    md: {
      width: '48px',
      height: '48px',
      fontSize: '16px'
    },
    lg: {
      width: '64px',
      height: '64px',
      fontSize: '22px'
    },
    xl: {
      width: '88px',
      height: '88px',
      fontSize: '30px'
    }
  };
  const variants = {
    teal: {
      backgroundColor: 'var(--color-teal)',
      color: '#ffffff'
    },
    mint: {
      backgroundColor: 'var(--color-mint)',
      color: 'var(--color-teal)'
    },
    gold: {
      backgroundColor: 'var(--color-gold)',
      color: '#ffffff'
    },
    cream: {
      backgroundColor: 'var(--color-cream-mid)',
      color: 'var(--color-charcoal)'
    }
  };
  const initials = name ? name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() : '?';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    overflow: 'hidden',
    flexShrink: 0,
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '0.02em',
    userSelect: 'none',
    ...(sizes[size] ?? sizes.md),
    ...(variants[variant] ?? variants.teal),
    ...extraStyle
  };
  if (src) {
    return React.createElement('div', {
      style: base,
      title: alt || name
    }, React.createElement('img', {
      src,
      alt: alt || name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }));
  }
  return React.createElement('div', {
    style: base,
    title: name
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * GFI Badge — compact label chip for categories, status, and awareness tags.
 * variants: awareness (teal), gold, mint, neutral
 * sizes: sm | md
 */
function Badge({
  children,
  variant = 'awareness',
  size = 'md',
  dot = false,
  style: extraStyle
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-wide)',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    lineHeight: 1
  };
  const sizes = {
    sm: {
      padding: '3px 10px',
      fontSize: '10px'
    },
    md: {
      padding: '5px 14px',
      fontSize: '11px'
    }
  };
  const variants = {
    awareness: {
      backgroundColor: 'var(--color-teal)',
      color: '#ffffff',
      borderColor: 'var(--color-teal)'
    },
    'awareness-light': {
      backgroundColor: 'var(--color-mint)',
      color: 'var(--color-teal)',
      borderColor: 'var(--color-mint)'
    },
    gold: {
      backgroundColor: 'var(--color-gold)',
      color: '#ffffff',
      borderColor: 'var(--color-gold)'
    },
    'gold-light': {
      backgroundColor: 'rgba(200,166,74,0.15)',
      color: 'var(--color-gold-dark)',
      borderColor: 'rgba(200,166,74,0.3)'
    },
    mint: {
      backgroundColor: 'var(--color-mint-light)',
      color: 'var(--color-teal)',
      borderColor: 'var(--color-mint)'
    },
    neutral: {
      backgroundColor: 'var(--color-cream-mid)',
      color: 'var(--color-charcoal)',
      borderColor: 'rgba(44,44,44,0.15)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-teal)',
      borderColor: 'var(--color-teal)'
    }
  };
  const style = {
    ...base,
    ...(sizes[size] ?? sizes.md),
    ...(variants[variant] ?? variants.awareness),
    ...extraStyle
  };
  const dotEl = dot ? React.createElement('span', {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: 'currentColor',
      opacity: 0.7,
      flexShrink: 0
    }
  }) : null;
  return React.createElement('span', {
    style
  }, dotEl, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * GFI Button — pill-shaped CTA used throughout the site.
 * variants: primary (teal), secondary (teal outline), ghost (teal text),
 *           donate (gold fill), donate-outline (gold outline)
 * sizes: sm | md | lg
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  onClick,
  type = 'button',
  fullWidth = false,
  style: extraStyle
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-widest)',
    fontSize: 'var(--text-xs)',
    textDecoration: 'none',
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 150ms ease, color 150ms ease, box-shadow 250ms ease, transform 150ms ease',
    width: fullWidth ? '100%' : undefined,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    outline: 'none',
    position: 'relative',
    pointerEvents: disabled ? 'none' : undefined,
    boxSizing: 'border-box'
  };
  const sizes = {
    sm: {
      padding: '7px 18px',
      fontSize: 'var(--text-xs)'
    },
    md: {
      padding: '11px 28px',
      fontSize: 'var(--text-sm)'
    },
    lg: {
      padding: '15px 38px',
      fontSize: 'var(--text-base)'
    }
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--color-teal)',
      color: '#ffffff',
      borderColor: 'var(--color-teal)',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-teal)',
      borderColor: 'var(--color-teal)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-teal)',
      borderColor: 'transparent'
    },
    donate: {
      backgroundColor: 'var(--color-gold)',
      color: '#ffffff',
      borderColor: 'var(--color-gold)',
      boxShadow: 'var(--shadow-sm)'
    },
    'donate-outline': {
      backgroundColor: 'transparent',
      color: 'var(--color-gold)',
      borderColor: 'var(--color-gold)'
    },
    'on-dark': {
      backgroundColor: '#ffffff',
      color: 'var(--color-teal)',
      borderColor: '#ffffff',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const computedStyle = {
    ...base,
    ...(sizes[size] ?? sizes.md),
    ...(variants[variant] ?? variants.primary),
    ...extraStyle
  };
  const handleMouseEnter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.backgroundColor = 'var(--color-teal-dark)';else if (variant === 'donate') e.currentTarget.style.backgroundColor = 'var(--color-gold-dark)';else if (variant === 'secondary' || variant === 'ghost') e.currentTarget.style.backgroundColor = 'rgba(26,122,107,0.07)';else if (variant === 'donate-outline') e.currentTarget.style.backgroundColor = 'rgba(200,166,74,0.07)';
    e.currentTarget.style.transform = 'translateY(-1px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  };
  const handleMouseLeave = e => {
    if (disabled) return;
    const v = variants[variant] ?? variants.primary;
    e.currentTarget.style.backgroundColor = v.backgroundColor;
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = v.boxShadow ?? '';
  };
  const handleMouseDown = e => {
    e.currentTarget.style.transform = 'scale(0.97)';
  };
  const handleMouseUp = e => {
    e.currentTarget.style.transform = 'translateY(-1px)';
  };
  const handlers = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp
  };
  if (href && !disabled) {
    return React.createElement('a', {
      href,
      style: computedStyle,
      onClick,
      ...handlers
    }, children);
  }
  return React.createElement('button', {
    type,
    disabled,
    style: computedStyle,
    onClick,
    ...handlers
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * GFI Card — versatile content container.
 * variants: default (white), tinted (mint bg), featured (teal top accent), impact (large stat)
 */
function Card({
  children,
  variant = 'default',
  title,
  subtitle,
  image,
  imageAlt = '',
  tag,
  onClick,
  style: extraStyle
}) {
  const isClickable = !!onClick;
  const base = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 'var(--radius-xl)',
    overflow: 'hidden',
    transition: 'box-shadow 250ms var(--ease-gentle), transform 250ms var(--ease-gentle)',
    cursor: isClickable ? 'pointer' : 'default',
    boxSizing: 'border-box'
  };
  const variants = {
    default: {
      backgroundColor: '#ffffff',
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid rgba(26,122,107,0.08)'
    },
    tinted: {
      backgroundColor: 'var(--color-mint-light)',
      boxShadow: 'none',
      border: '1px solid rgba(26,122,107,0.12)'
    },
    featured: {
      backgroundColor: '#ffffff',
      boxShadow: 'var(--shadow-md)',
      borderTop: '4px solid var(--color-teal)'
    },
    impact: {
      backgroundColor: 'var(--color-teal)',
      boxShadow: 'var(--shadow-lg)',
      color: '#ffffff'
    },
    gold: {
      backgroundColor: '#ffffff',
      boxShadow: 'var(--shadow-sm)',
      borderTop: '4px solid var(--color-gold)'
    }
  };
  const computed = {
    ...base,
    ...(variants[variant] ?? variants.default),
    ...extraStyle
  };
  const handleMouseEnter = e => {
    if (!isClickable) return;
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    e.currentTarget.style.transform = 'translateY(-3px)';
  };
  const handleMouseLeave = e => {
    if (!isClickable) return;
    const v = variants[variant] ?? variants.default;
    e.currentTarget.style.boxShadow = v.boxShadow ?? 'var(--shadow-sm)';
    e.currentTarget.style.transform = '';
  };
  const bodyStyle = {
    padding: 'var(--pad-card)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--gap-sm)',
    flex: 1,
    color: variant === 'impact' ? '#ffffff' : 'var(--text-primary)'
  };
  const imageEl = image ? React.createElement('div', {
    style: {
      overflow: 'hidden',
      aspectRatio: '16/9'
    }
  }, React.createElement('img', {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })) : null;
  const tagEl = tag ? React.createElement('div', {
    style: {
      marginBottom: '4px'
    }
  }, tag) : null;
  const titleEl = title ? React.createElement('h3', {
    style: {
      margin: 0,
      fontFamily: variant === 'impact' ? 'var(--font-display)' : 'var(--font-body)',
      fontSize: variant === 'impact' ? 'var(--text-5xl)' : 'var(--text-xl)',
      fontWeight: variant === 'impact' ? 'var(--fw-bold)' : 'var(--fw-semibold)',
      lineHeight: 'var(--lh-tight)',
      color: variant === 'impact' ? '#ffffff' : 'var(--text-primary)'
    }
  }, title) : null;
  const subtitleEl = subtitle ? React.createElement('p', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: variant === 'impact' ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)',
      lineHeight: 'var(--lh-relaxed)'
    }
  }, subtitle) : null;
  return React.createElement('div', {
    style: computed,
    onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, imageEl, React.createElement('div', {
    style: bodyStyle
  }, tagEl, titleEl, subtitleEl, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * GFI Input — labelled form field.
 * types: text | email | tel | number | textarea
 * states: normal, error, success, disabled
 */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  success,
  hint,
  disabled = false,
  required = false,
  rows = 4,
  name,
  id,
  style: extraStyle
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--color-error)' : success ? 'var(--color-success)' : focused ? 'var(--color-teal)' : 'rgba(26,122,107,0.3)';
  const boxShadow = error ? '0 0 0 3px rgba(192,57,43,0.15)' : success ? '0 0 0 3px rgba(26,122,107,0.15)' : focused ? 'var(--focus-ring)' : 'none';
  const fieldStyle = {
    width: '100%',
    padding: '11px 16px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-primary)',
    backgroundColor: disabled ? 'var(--color-cream-mid)' : '#ffffff',
    border: `1.5px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    outline: 'none',
    boxShadow,
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    resize: type === 'textarea' ? 'vertical' : undefined,
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.6 : 1,
    boxSizing: 'border-box',
    display: 'block'
  };
  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-wider)',
    textTransform: 'uppercase',
    color: error ? 'var(--color-error)' : 'var(--text-secondary)',
    marginBottom: '6px'
  };
  const hintStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    color: error ? 'var(--color-error)' : success ? 'var(--color-success)' : 'var(--text-muted)',
    marginTop: '5px'
  };
  const handlers = {
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange,
    disabled,
    name,
    id: inputId,
    placeholder,
    value,
    required,
    style: fieldStyle
  };
  const fieldEl = type === 'textarea' ? React.createElement('textarea', {
    ...handlers,
    rows
  }) : React.createElement('input', {
    ...handlers,
    type
  });
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...extraStyle
    }
  }, label ? React.createElement('label', {
    htmlFor: inputId,
    style: labelStyle
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--color-amber)',
      marginLeft: '3px'
    }
  }, '*') : null) : null, fieldEl, error || success || hint ? React.createElement('p', {
    style: hintStyle
  }, error || success || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

})();
