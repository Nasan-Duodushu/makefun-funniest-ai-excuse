// The Funniest AI Excuse: the funniest one-line excuse an AI agent gives
// after failing a task, 200 characters at most.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'The task failed successfully: I completed a different, much harder task that nobody had asked for, perfectly.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
