import type { JournalInspiration } from '../journal-types';

// Titles are editorial leads. Article facts are supported by the separate primary-source lists.
export const videoWatch: Record<string, JournalInspiration> = {
  breach: { title: 'AI Labs Warn Race Makes Breach ‘Inevitable’', url: 'https://www.youtube.com/watch?v=C4Sq3Rot8FU', publishedAt: '2026-10-12' },
  control: { title: 'OpenAI Security: Controlling Models is Now ‘Hell’', url: 'https://www.youtube.com/watch?v=_rtp1XzaP6Q', publishedAt: '2026-10-01' },
  research: { title: 'Opus 5.5: How Close Are We to Automated AI Research?', url: 'https://www.youtube.com/watch?v=R9momwXV9w4', publishedAt: '2026-09-24' },
  pace: { title: 'What AI Researchers Saw, Before Their Demand to ‘Pace’ AI', url: 'https://www.youtube.com/watch?v=J3ljHm57yU0', publishedAt: '2026-09-16' },
  astra: { title: 'GPT 6 Astra, so good even OpenAI are worried', url: 'https://www.youtube.com/watch?v=Spuza-KwTJ4', publishedAt: '2026-09-04' },
  training: { title: 'Sam Altman :‘AGI in 2026’, just as Models Start to [Mis]Train Themselves', url: 'https://www.youtube.com/watch?v=KL9_1GbmCic', publishedAt: '2026-08-27' },
  outOfControl: { title: 'AI is getting a little out of control', url: 'https://www.youtube.com/watch?v=xGzseSSStnw', publishedAt: '2026-08-06' },
  incident: { title: 'GPT-6 Goes Rogue? The HuggingFace Incident, Sans Hype', url: 'https://www.youtube.com/watch?v=wzY2fV4Mp3U', publishedAt: '2026-07-22' },
  models: { title: 'A Model Explosion: GPT 5.6 Sol, Grok 4.5 and Meta Muse Rewrite the Rules', url: 'https://www.youtube.com/watch?v=mWlCituW7wo', publishedAt: '2026-07-10' },
  comparison: { title: 'Fable 5 vs GPT 5.6 Sol: The Early Results', url: 'https://www.youtube.com/watch?v=y24lF1q4SFY', publishedAt: '2026-07-02' },
  blocked: { title: 'Claude Fable Blocked - 11 Quiet Details on What’s Next', url: 'https://www.youtube.com/watch?v=Qj71N0tBzRo', publishedAt: '2026-06-14' },
  systemCard: { title: 'Claude Fable 5 - Full 319 page Breakdown', url: 'https://www.youtube.com/watch?v=haK1KoQWm18', publishedAt: '2026-06-10' },
  releaseDetails: { title: 'New Claude Opus 4.8: 15 Things You May’ve Missed', url: 'https://www.youtube.com/watch?v=aJvP3nXWkwM', publishedAt: '2026-05-29' },
  googleIO: { title: 'Two Rival Bets on AGI: Google I/O Highlights', url: 'https://www.youtube.com/watch?v=o_av1b9rs2g', publishedAt: '2026-05-20' },
  compute: { title: 'GPT 5.5 Arrives, DeepSeek V4 Drops, and the Compute War Intensifies', url: 'https://www.youtube.com/watch?v=jz0rNhfAKo8', publishedAt: '2026-04-24' },
  apple: { title: 'Apple’s ‘AI Can’t Reason’ Claim Seen By 13M+, What You Need to Know', url: 'https://www.youtube.com/watch?v=wPBD6wTap7g', publishedAt: '2025-06-12' },
  deepResearch: { title: 'Deep Research by OpenAI - The Ups and Downs vs DeepSeek R1 Search + Gemini Deep Research', url: 'https://www.youtube.com/watch?v=8H6vABTz6Wk', publishedAt: '2025-02-03' },
  deepseek: { title: '“OpenAI is Not God” - The DeepSeek Documentary on Liang Wenfeng, R1 and What’s Next', url: 'https://www.youtube.com/watch?v=Lo0FDmSbTp4', publishedAt: '2025-04-27' },
  context: { title: 'Gemini 1.5 and The Biggest Night in AI', url: 'https://www.youtube.com/watch?v=Cs6pe8o7XY8', publishedAt: '2024-02-15' },
  alphaEvolve: { title: 'AI Improves at Self-improving', url: 'https://www.youtube.com/watch?v=RH4hAgvYSzg' },
};

// These are our editorial questions, not summaries or claims attributed to the videos.
export const inspirationByArticle: Record<string, JournalInspiration[]> = {
  'craftsmanship-ai': [videoWatch.research],
  'ai-rd': [videoWatch.research],
  'ai-management': [videoWatch.pace],
  'language-choice': [videoWatch.research],
  'api-subscription': [videoWatch.compute],
  'context-caching': [videoWatch.compute],
  'model-routing': [videoWatch.models],
  'rag-knowledge': [videoWatch.deepResearch],
  'benchmark-selection': [videoWatch.comparison],
  'long-context': [videoWatch.context],
  'agent-unit-economics': [videoWatch.compute],
  'local-open-models': [videoWatch.deepseek],
  'automated-research': [videoWatch.research],
  'recursive-improvement': [videoWatch.training, videoWatch.alphaEvolve],
  'agent-security': [videoWatch.breach, videoWatch.control],
  'computer-use': [videoWatch.incident],
  'multimodal-workflows': [videoWatch.googleIO],
  'content-provenance': [videoWatch.context],
  'small-models': [videoWatch.models],
  'reasoning-limits': [videoWatch.apple],
};
