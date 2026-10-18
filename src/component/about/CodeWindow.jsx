import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';

const CODE_LINES = [
    {
        num: 1,
        tokens: [
            { text: 'const ', type: 'keyword' },
            { text: 'developer', type: 'variable' },
            { text: ' = {', type: 'punctuation' },
        ],
    },
    {
        num: 2,
        tokens: [
            { text: '  approach: [', type: 'property' },
            { text: '"think"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"code"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"test"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"improve"', type: 'string' },
            { text: '],', type: 'punctuation' },
        ],
    },
    {
        num: 3,
        tokens: [
            { text: '  bugs: [', type: 'property' },
            { text: '"part of my journey"', type: 'string' },
            { text: '],', type: 'punctuation' },
        ],
    },
    {
        num: 4,
        tokens: [
            { text: '  priority: ', type: 'property' },
            { text: '"impact over complexity"', type: 'string' },
            { text: ',', type: 'punctuation' },
        ],
    },
    {
        num: 5,
        tokens: [
            { text: '  coffee: ', type: 'property' },
            { text: 'true', type: 'boolean' },
            { text: ',', type: 'punctuation' },
        ],
    },
    {
        num: 6,
        tokens: [
            { text: '  hireMe', type: 'method' },
            { text: '() { ', type: 'punctuation' },
            { text: 'return ', type: 'keyword' },
            { text: '"Let\'s build!"', type: 'string' },
            { text: ' }', type: 'punctuation' },
        ],
    },
    {
        num: 7,
        tokens: [
            { text: '};', type: 'punctuation' },
        ],
    },
    {
        num: 8,
        tokens: [],
    },
    {
        num: 9,
        tokens: [
            { text: '// always learning, always shipping', type: 'comment' },
        ],
    },
];

const RAW_CODE = `const developer = {
  approach: ["think", "code", "test", "improve"],
  bugs: ["part of my journey"],
  priority: "impact over complexity",
  coffee: true,
  hireMe() { return "Let's build!" }
};

// always learning, always shipping`;

const CodeWindow = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const [charCount, setCharCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [copied, setCopied] = useState(false);
    const [runOutput, setRunOutput] = useState(null);

    // Calculate total character count across lines (including newlines)
    const { totalChars, tokenMeta } = useMemo(() => {
        let count = 0;
        const meta = [];

        CODE_LINES.forEach((line, lineIdx) => {
            const lineTokens = [];
            line.tokens.forEach((tok) => {
                const start = count;
                const end = start + tok.text.length;
                lineTokens.push({
                    ...tok,
                    start,
                    end,
                });
                count = end;
            });

            // Newline character between lines
            const newlinePos = lineIdx < CODE_LINES.length - 1 ? count : -1;
            if (lineIdx < CODE_LINES.length - 1) {
                count += 1;
            }

            meta.push({
                num: line.num,
                tokens: lineTokens,
                newlinePos,
            });
        });

        return { totalChars: count, tokenMeta: meta };
    }, []);

    // Typing effect logic
    useEffect(() => {
        if (!isInView) return;

        let interval = null;
        let current = 0;

        const startTyping = () => {
            interval = setInterval(() => {
                current += 1;
                setCharCount(current);

                if (current >= totalChars) {
                    clearInterval(interval);
                    setIsComplete(true);
                }
            }, 18);
        };

        const timeout = setTimeout(startTyping, 400);

        return () => {
            clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [isInView, totalChars]);

    const handleReplay = () => {
        setIsComplete(false);
        setCharCount(0);
        setRunOutput(null);

        let current = 0;
        const interval = setInterval(() => {
            current += 1;
            setCharCount(current);

            if (current >= totalChars) {
                clearInterval(interval);
                setIsComplete(true);
            }
        }, 18);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(RAW_CODE).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleRunHireMe = () => {
        setRunOutput("Let's build! 🚀");
        setTimeout(() => {
            setRunOutput(null);
        }, 4000);
    };

    const lastLineNum = CODE_LINES[CODE_LINES.length - 1].num;

    return (
        <div className="terminal-card" ref={containerRef}>
            {/* Ambient terminal background glow */}
            <div className="terminal-card__glow" />

            {/* Terminal Window Header */}
            <div className="terminal-card__header">
                <div className="terminal-card__controls">
                    <span className="terminal-card__dot terminal-card__dot--red" title="Close" />
                    <span className="terminal-card__dot terminal-card__dot--yellow" title="Minimize" />
                    <span className="terminal-card__dot terminal-card__dot--green" title="Expand" />
                </div>

                <div className="terminal-card__title">
                    <i className="bx bxs-file-code terminal-card__title-icon" />
                    <span>developer.js</span>
                </div>

                <div className="terminal-card__actions">
                    <span
                        className={`terminal-card__status ${
                            isComplete ? 'terminal-card__status--ready' : 'terminal-card__status--typing'
                        }`}
                    >
                        <span className="terminal-card__status-pulse" />
                        {isComplete ? 'ready' : 'typing...'}
                    </span>

                    <button
                        type="button"
                        className="terminal-card__btn"
                        onClick={handleReplay}
                        title="Replay typing"
                        aria-label="Replay typing animation"
                    >
                        <i className="bx bx-refresh" />
                    </button>

                    <button
                        type="button"
                        className="terminal-card__btn"
                        onClick={handleCopy}
                        title={copied ? 'Copied!' : 'Copy code'}
                        aria-label="Copy code to clipboard"
                    >
                        <i className={copied ? 'bx bx-check' : 'bx bx-copy'} />
                    </button>
                </div>
            </div>

            {/* Terminal Editor Body */}
            <div className="terminal-card__body">
                <div className="terminal-card__lines">
                    {tokenMeta.map((lineMeta) => {
                        return (
                            <div key={lineMeta.num} className="terminal-card__line">
                                <span className="terminal-card__line-num">{lineMeta.num}</span>

                                <div className="terminal-card__line-content">
                                    {lineMeta.tokens.map((token, tIdx) => {
                                        const { text, type, start, end } = token;

                                        if (charCount < start) {
                                            return null;
                                        }

                                        const isPartial = charCount >= start && charCount < end;
                                        const visibleText = isPartial
                                            ? text.substring(0, charCount - start)
                                            : text;

                                        const isMethodToken = type === 'method';

                                        return (
                                            <React.Fragment key={tIdx}>
                                                <span
                                                    className={`token token--${type} ${
                                                        isMethodToken ? 'token--interactive' : ''
                                                    }`}
                                                    onClick={isMethodToken ? handleRunHireMe : undefined}
                                                    title={isMethodToken ? 'Click to run hireMe()' : undefined}
                                                >
                                                    {visibleText}
                                                </span>

                                                {/* Blinking cursor immediately after the active character */}
                                                {isPartial && (
                                                    <span className="terminal-card__cursor">|</span>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}

                                    {/* Cursor at end of line when at newline position */}
                                    {charCount === lineMeta.newlinePos && (
                                        <span className="terminal-card__cursor">|</span>
                                    )}

                                    {/* Final cursor when animation is fully finished on last line */}
                                    {isComplete && lineMeta.num === lastLineNum && (
                                        <span className="terminal-card__cursor terminal-card__cursor--idle">|</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Interactive run output toast */}
                {runOutput && (
                    <motion.div
                        className="terminal-card__output"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -5 }}
                    >
                        <span className="terminal-card__output-arrow">&gt;</span>
                        <span className="terminal-card__output-text">{runOutput}</span>
                    </motion.div>
                )}
            </div>

            {/* Terminal Window Footer */}
            <div className="terminal-card__footer">
                <div className="terminal-card__footer-left">
                    <span className="terminal-card__lang-tag">JavaScript</span>
                    <span className="terminal-card__footer-sep">•</span>
                    <span className="terminal-card__encoding">UTF-8</span>
                </div>
                <div className="terminal-card__footer-right">
                    <span>LF</span>
                    <span className="terminal-card__footer-sep">•</span>
                    <span>Spaces: 2</span>
                </div>
            </div>
        </div>
    );
};

export default CodeWindow;
