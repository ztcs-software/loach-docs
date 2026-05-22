window.LOACH_SEARCH_INDEX = [
  {
    "title": "Introduction",
    "url": "index.html",
    "heading": "What is Loach?",
    "anchor": "what-is-loach",
    "body": "Loach is an all-in-one desktop AI workspace built around a single idea: talking to an LLM should feel effortless. It talks to a local Ollama server and accepts any OpenAI-compatible endpoint as a provider including llama.cpp, LM Studio, vLLM and LiteLLM."
  },
  {
    "title": "Introduction",
    "url": "index.html",
    "heading": "Local-first and private",
    "anchor": "what-is-loach",
    "body": "With local models — Qwen, Gemma, DeepSeek, GPT-OSS and Mistral — your data stays on your machine. No telemetry, no required network access, no paid subscriptions and no usage limits. Optional API keys live in your OS credential manager."
  },
  {
    "title": "Introduction",
    "url": "index.html",
    "heading": "Highlights",
    "anchor": "highlights",
    "body": "Two providers side-by-side, spaces, snippets, per-chat parameters, MCP support, local-first storage."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Install from a pre-built package",
    "anchor": "prebuilt",
    "body": "With every stable release ready-to-install packages are published for each supported operating system: Windows .exe NSIS installer; Linux .deb, .rpm and .AppImage."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Windows",
    "anchor": "windows",
    "body": "Download the .exe from the latest release. Run the installer and follow the prompts. WebView2 is required and is pre-installed on Windows 11."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Linux",
    "anchor": "linux",
    "body": "Install the .deb on Debian and Ubuntu, .rpm on Fedora and RHEL, or run the .AppImage on any distro. sudo apt install ./loach_*.deb"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Build from source",
    "anchor": "source",
    "body": "Prerequisites: Node.js 20.19+ (or 22.12+) and npm, Rust stable toolchain via rustup, platform build tooling. Clone the repo, npm install, npm run tauri dev for development, npm run tauri build for production installers."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Prerequisites",
    "anchor": "prerequisites",
    "body": "Node.js 20.19+ or 22.12+, Rust stable, Visual Studio Build Tools and WebView2 on Windows; webkit2gtk-4.1, libayatana-appindicator3-dev, librsvg2-dev, build-essential, libssl-dev, pkg-config, libsecret-1-dev on Linux."
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Using with Ollama",
    "anchor": "ollama",
    "body": "Install Ollama and start the server, then pull at least one model. ollama serve, ollama pull gemma3:4b. Loach probes http://localhost:11434 on launch."
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Using with an OpenAI-compatible endpoint",
    "anchor": "openai",
    "body": "Open Settings then Providers, paste your API key (stored in your OS credential manager), and point the base URL to any compatible endpoint: OpenAI, vLLM, LM Studio, LiteLLM, llama.cpp llama-server, Groq, OpenRouter, Together, Fireworks, Mistral."
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Your first chat",
    "anchor": "first-chat",
    "body": "Open Loach, pick a provider from the chat header, pick a model, type a prompt and press Enter. Tokens stream in and generation stats appear under each model turn."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Providers",
    "anchor": "providers",
    "body": "A provider is where Loach sends a request when you submit a prompt. Loach supports Ollama local server and any OpenAI-compatible HTTP endpoint."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Chats",
    "anchor": "chats",
    "body": "A chat is a single conversation. Chats are persisted locally and remember the provider, model, per-chat parameters, custom instructions, persona and tone, and any attachments."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Spaces",
    "anchor": "spaces",
    "body": "A Space is a folder of chats that share context — instructions, reference files and memory. Use a Space when several chats orbit the same topic: a codebase, a research question, an ongoing piece of writing."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Snippets",
    "anchor": "snippets",
    "body": "A Snippet is a saved reusable prompt. Optionally pin a model, then click Run to open a fresh chat pre-filled with the prompt and ready to send."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Per-chat parameters",
    "anchor": "parameters",
    "body": "Override sampling and runtime settings per chat: temperature, top_k, top_p, min_p, max_tokens, context length, system prompt. Values layer over Modelfile and per-model defaults."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Personas and tones",
    "anchor": "personas-tones",
    "body": "A Persona is a role the model takes on — Code Reviewer, Translator, ELI5. A Tone is the delivery style — Direct, Detailed, Casual, Formal, Playful, Skeptical, Socratic. Both layer on top of your custom instructions."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Custom instructions",
    "anchor": "custom-instructions",
    "body": "Free-text instructions injected into the system prompt. Set them globally, per Space, or per chat. Lower scope wins over higher scope."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "MCP servers",
    "anchor": "mcp",
    "body": "Loach speaks the Model Context Protocol. Register an MCP server (Streamable HTTP), test the handshake, inspect tools and use them during a chat."
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Ollama (local)",
    "anchor": "ollama",
    "body": "Loach probes http://localhost:11434 on launch. Any models you've pulled appear in the chat header automatically. The Models tab is a full UI on top of the Ollama HTTP API: pull, copy, customize, delete."
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "OpenAI-compatible endpoints",
    "anchor": "openai",
    "body": "Anything that speaks the OpenAI Chat Completions protocol works. Configure base URL and API key in Settings then Providers. The key is stored in the OS credential manager."
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Common base URLs",
    "anchor": "endpoints",
    "body": "OpenAI https://api.openai.com/v1, vLLM http://localhost:8000/v1, LM Studio http://localhost:1234/v1, LiteLLM http://localhost:4000/v1, llama.cpp http://localhost:8080/v1, Groq https://api.groq.com/openai/v1, OpenRouter https://openrouter.ai/api/v1."
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Preloading and Low VRAM",
    "anchor": "preload",
    "body": "Model preloading warms your default local model into VRAM at launch so the first message streams faster. Low VRAM mode sends Ollama's low_vram flag with every request — useful on lower-spec devices."
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Where things live",
    "anchor": "where",
    "body": "Chats, messages, spaces, snippets, MCP servers and app settings live in SQLite at app-data-dir/loach.db. OpenAI API key and app-lock hash live in the OS credential manager. App data dir on Windows %APPDATA%\\dev.loach.app\\ and on Linux ~/.local/share/dev.loach.app/."
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Offline by default",
    "anchor": "offline",
    "body": "Loach launches and works completely offline as long as you stick to local providers. Models library, Spaces, Snippets, search, parameter sidebar, app lock and chat history are all available without network access."
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "No telemetry",
    "anchor": "no-telemetry",
    "body": "Loach does not phone home. There is no usage tracking, no analytics, no crash reporting service."
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Secrets handling",
    "anchor": "secrets",
    "body": "API keys and app-lock credentials are stored in your operating system's credential manager via the keyring crate. App-lock secrets are hashed with Argon2id before they're stored; plaintext is never written anywhere."
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Backup, restore and wipe",
    "anchor": "backup",
    "body": "From Settings then Data management export full content to JSON, restore from a previously exported file, or permanently delete all stored data in a few clicks."
  },
  {
    "title": "Tech stack",
    "url": "pages/tech-stack.html",
    "heading": "Tech stack",
    "anchor": "",
    "body": "The technology stack behind Loach: Tauri 2.x desktop shell, React 18 + Vite 7 + TypeScript frontend, Tailwind CSS and shadcn/ui, Zustand state, SQLite via rusqlite, keyring crate for secrets, argon2 hashing, reqwest with rustls-tls, react-markdown, pdfjs-dist and mammoth for document parsing."
  },
  {
    "title": "Tech stack",
    "url": "pages/tech-stack.html",
    "heading": "Stack at a glance",
    "anchor": "stack",
    "body": "Desktop shell: Tauri 2.x (Rust). Frontend: React 18 + Vite 7 + TypeScript. Styling: Tailwind CSS + shadcn/ui. State: Zustand. Storage: SQLite via rusqlite. Secrets: keyring crate. Hashing: argon2 + rand_core. HTTP: reqwest + rustls-tls. Markdown: react-markdown + remark-gfm + rehype-highlight. Document parsing: pdfjs-dist + mammoth. System tray: Tauri 2 tray-icon. Bundle targets: NSIS .exe on Windows; .deb / .rpm / .AppImage on Linux."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Is Loach free?",
    "anchor": "general",
    "body": "Yes. Loach is open source under the MIT license. There are no subscriptions, paywalled features, or usage limits inside the app."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Which platforms are supported?",
    "anchor": "general",
    "body": "Native desktop apps for Windows and Linux are published with every release. macOS is not officially packaged at this time but the source can be built on macOS."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Does Loach send my data anywhere?",
    "anchor": "general",
    "body": "No, not on its own. There is no telemetry. With a purely local provider like Ollama, Loach works fully offline."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Does Loach come with a built-in model?",
    "anchor": "models",
    "body": "No. Loach is the workspace; the model is supplied by a provider. Install Ollama and pull a local model, or configure an OpenAI-compatible endpoint."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "I have very limited VRAM. Can I still use local models?",
    "anchor": "models",
    "body": "Yes — try smaller quantizations (e.g. a 4-bit 3B or 4B model) and enable Low VRAM mode globally or per-chat."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Where are my API keys stored?",
    "anchor": "security",
    "body": "In your operating system's credential manager — Windows Credential Manager or the Linux Secret Service. Keys are never written to the SQLite database or to plain-text config."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "How do I back up my chats?",
    "anchor": "data",
    "body": "Open Settings then Data management and use Export. You'll get a single JSON file containing chats, spaces, snippets and settings. API keys are not in the export."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "The model dropdown is empty.",
    "anchor": "troubleshooting",
    "body": "For Ollama: make sure ollama serve is running and at least one model is pulled. Loach probes http://localhost:11434 on launch. For an OpenAI-compatible provider: confirm the base URL, that the API key is set, and that the endpoint exposes a /models route."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Generations are very slow on my machine.",
    "anchor": "troubleshooting",
    "body": "Try a smaller model or a more aggressive quantization. Turn on Model preloading so the first request doesn't wait on a cold start. Enable Low VRAM mode if you're memory-constrained."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Where do I report a bug or request a feature?",
    "anchor": "troubleshooting",
    "body": "Open an issue on the GitHub repository at github.com/ztcs-software/loach/issues. Please include your OS, Loach version, and steps to reproduce."
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "All features",
    "anchor": "",
    "body": "A reference for every feature Loach ships with today, grouped by category. Pick a category or open any feature for the full description."
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Provider selection",
    "anchor": "",
    "body": "Loach is a chat client, not a model. Out of the box it speaks two protocols: Ollama for local models running on your machine, and any OpenAI-compatible endpoint for hosted or self-hosted services. You can keep both wired up at once and switch between them at…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Local: Ollama",
    "anchor": "local-ollama",
    "body": "The default backend. Loach talks to a local ollama serve process over HTTP and refreshes the model list automatically when you open the providers panel. If Ollama is not running, the panel surfaces a soft \"start ollama…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Cloud or self-hosted: OpenAI-compatible",
    "anchor": "cloud-openai",
    "body": "Any endpoint that implements /v1/chat/completions works. That includes the real OpenAI API, plus vLLM, LM Studio, LiteLLM, OpenRouter, Groq and other proxies. A presets dropdown next to the base URL field one-clicks the URL to the documented endpoint for OpenAI, llama.cpp, LM Studio, vLLM, or LiteLLM."
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Test connection",
    "anchor": "test-connection",
    "body": "Each provider section exposes a one-click probe so you can verify a base URL (and API key) before opening a chat. Ollama: pings /api/tags and reports the daemon version and visible model count. OpenAI-compatible: calls /models with the stored key and reports the model count or a readable error. Disabled while there is an unsaved key in the input."
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "The model picker",
    "anchor": "model-picker",
    "body": "Every chat has a model dropdown in its header that lists both providers' catalogs side-by-side, grouped by name. Picking a model:"
  },
  {
    "title": "Local model management",
    "url": "pages/features/model-management.html",
    "heading": "Local model management",
    "anchor": "",
    "body": "The Models sidebar tab is a full management surface for the local Ollama catalog, plus a read-only listing of the catalog reachable through your OpenAI-compatible endpoint."
  },
  {
    "title": "Local model management",
    "url": "pages/features/model-management.html",
    "heading": "The library",
    "anchor": "library",
    "body": "Every installed model gets a tile showing its family, parameter size, on-disk size, quantization and capabilities (thinking, tool use, vision). The toolbar offers:"
  },
  {
    "title": "Local model management",
    "url": "pages/features/model-management.html",
    "heading": "The Models editor",
    "anchor": "editor",
    "body": "Opening a model loads its full configuration in a form so you can:"
  },
  {
    "title": "Local model management",
    "url": "pages/features/model-management.html",
    "heading": "Modelfile safety",
    "anchor": "modelfile-safety",
    "body": "The Save as… form refuses to compile a Modelfile that would smuggle in extra directives via a malicious base tag, system block or template block. Base tags are checked against a conservative allowlist; system and…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Per-chat parameters",
    "anchor": "",
    "body": "Every chat has a slide-out Parameters panel on the right of the window. It exposes the knobs the provider offers and remembers per-chat overrides so you can dial each conversation independently."
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Simple and Advanced modes",
    "anchor": "simple-advanced",
    "body": "The panel has two views:"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "How the values cascade",
    "anchor": "cascade",
    "body": "What a chat actually sends to the model is a merge of several layers. From broadest to narrowest, with later layers winning:"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Settings reference",
    "anchor": "settings-reference",
    "body": "A short description of every knob the panel exposes: Thinking, Temperature, Top-P, Top-K, Min-P, Context Length (num_ctx), Max Tokens, Repeat Penalty, Frequency Penalty, Presence Penalty, GPU Layers (num_gpu), Low VRAM, Seed, Persona, Tone, additional instructions."
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Thinking toggle",
    "anchor": "thinking",
    "body": "Visible for Ollama models whose capabilities include thinking . It sets the think parameter on the chat request and is ignored by OpenAI-compatible providers. The default for new chats comes from Settings → General →…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Low VRAM toggle",
    "anchor": "low-vram",
    "body": "Ollama-only. Forces smaller batches and a leaner KV cache — useful when you are tight on GPU memory. The per-chat toggle is overridden if Settings → General → Low VRAM mode is enabled globally; in that case the panel…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Per-chat system prompt",
    "anchor": "system-prompt",
    "body": "The textarea at the bottom of the Simple view sets a system prompt for this chat only. It overrides any global custom instructions and Space-level instructions for the chat it lives in."
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "Personas and tones",
    "anchor": "",
    "body": "Personas and tones are two thin style layers that compose with the chat's system prompt at send time. A persona sets the role the model plays; a tone tweaks how it speaks. They're curated presets that play nicely with your own custom instructions rather than…"
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "Personas (role)",
    "anchor": "personas",
    "body": "Pick one from the composer's + menu or from the parameters sidebar. The selected persona pre-pends a short system prompt that frames the assistant's job."
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "Tones (style)",
    "anchor": "tones",
    "body": "Default, Direct (replaces the old Concise), Detailed, Casual, Formal, Encouraging, Playful, Skeptical, and Socratic. A tone is appended after the persona and your instructions. Settings → General has an expandable \"What each tone does\" drawer."
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "How they stack",
    "anchor": "how-they-stack",
    "body": "At send time the model receives, in order: your custom instructions (resolved per the precedence rules ), the persona's system prompt, and the tone modifier. The chat's own per-chat system prompt sits at the head of…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Custom instructions",
    "anchor": "",
    "body": "Custom instructions are the system prompt Loach attaches to your messages. You can write them at three scopes and the narrower scope always wins, so you can set defaults once and tighten them where it matters."
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Where to set them",
    "anchor": "where-to-set",
    "body": "Global — Settings → General . Applies to every new chat."
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Precedence",
    "anchor": "precedence",
    "body": "Custom instructions cascade from broadest to narrowest:"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Template variables",
    "anchor": "template-variables",
    "body": "Any prompt authored by you — global instructions, Space instructions, Snippet bodies, per-chat system prompts — can use these placeholders. They are substituted at send time."
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Examples",
    "anchor": "examples",
    "body": "© ZTCS. Loach Docs."
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "Generation stats",
    "anchor": "",
    "body": "Every assistant reply shows a small metrics chip under the bubble. It gives you a quick read on how the model performed without leaving the conversation."
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "What you see",
    "anchor": "what-you-see",
    "body": "The chip reports, when the provider makes the data available:"
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "When some numbers are missing",
    "anchor": "when-its-missing",
    "body": "Not every provider returns every metric. Local Ollama reports all of them. Hosted OpenAI-compatible endpoints typically return token counts but not always tokens per second; Loach renders whatever was given and…"
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "Cancelled and errored replies",
    "anchor": "cancelled-replies",
    "body": "If a generation is cancelled or errors mid-stream, the chip still shows the partial token count and elapsed time so you can tell how far the model got before it stopped. See Concurrency & queue for details on how…"
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Markdown rendering",
    "anchor": "",
    "body": "Every assistant turn is rendered as GitHub-flavoured Markdown as the response streams . You see formatted output the moment the tokens arrive, not after the model finishes."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "What works out of the box",
    "anchor": "what-works",
    "body": "Headings, lists, blockquotes — standard CommonMark."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Copying and selecting",
    "anchor": "copy-and-select",
    "body": "Right-click any assistant message for a menu with Copy raw (the original markdown source) and Copy as markdown (the rendered text serialized back to markdown). You can also highlight any range of text and a small Copy…"
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Long user messages",
    "anchor": "long-prompts",
    "body": "User bubbles that paste in dozens of lines automatically clamp to the first ten lines with a Show more toggle, so the assistant's reply does not get pushed off-screen by your own input."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Regenerate the last reply",
    "anchor": "regenerate",
    "body": "The last assistant message carries a Regenerate action. Triggering it drops the existing reply, re-sends the preceding user turn, and streams a fresh answer in place — useful when the model wanders off or you want a second take without retyping the prompt. Only the most recent assistant message can be regenerated."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Thinking traces",
    "anchor": "thinking-traces",
    "body": "For reasoning-capable models, the chain-of-thought stream is rendered into a separate, collapsible block above the answer. You can fold it away when you only care about the final answer and pop it back open to audit…"
  },
  {
    "title": "Code blocks & canvas",
    "url": "pages/features/code-canvas.html",
    "heading": "Code blocks & canvas",
    "anchor": "",
    "body": "Every fenced code block in an assistant reply is syntax-highlighted, line-numbered and comes with a small toolbar. For longer snippets, the Open in canvas action gives you a wider, easier-to-read view alongside the conversation."
  },
  {
    "title": "Code blocks & canvas",
    "url": "pages/features/code-canvas.html",
    "heading": "Inline actions",
    "anchor": "inline-actions",
    "body": "Hover over any code block and the toolbar exposes:"
  },
  {
    "title": "Code blocks & canvas",
    "url": "pages/features/code-canvas.html",
    "heading": "The canvas panel",
    "anchor": "canvas-panel",
    "body": "The canvas opens in the right-hand slot of the window. It shows:"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "Concurrency & queue",
    "anchor": "",
    "body": "Only one model generation runs at a time across all of your chats. Everything else waits in a FIFO queue — and you can always jump the line when you need to."
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "One generation at a time",
    "anchor": "one-at-a-time",
    "body": "Local models are heavy on hardware: most of the time only one prompt can stream at once without thrashing VRAM or pinning the CPU. Loach enforces this at the application level, regardless of which chats or providers…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "The queue",
    "anchor": "the-queue",
    "body": "Send a prompt while another chat is busy and your request is parked. The chat's row in the sidebar shows a spinner so you can see at a glance which chats are waiting. The queue is strictly first-in, first-out — earlier…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "Respond now",
    "anchor": "respond-now",
    "body": "If a chat is waiting and you do not want to wait any more, the chat header offers a Respond now action. It cancels whatever generation is currently running (preserving its partial output, see below) and immediately…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "Cancelling and errors",
    "anchor": "cancel-and-error",
    "body": "Whether you stop a stream manually (the send button becomes a stop button while streaming) or the runner is pre-empted by Respond now , the partial output is kept in the transcript along with a short error tail so the…"
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Private Chat",
    "anchor": "",
    "body": "An ephemeral chat surface for conversations that should leave no trace. Nothing is written to disk, nothing is remembered between sessions, and the transcript is wiped the moment the overlay closes. Open it from the ghost icon in the title bar."
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Nothing is persisted",
    "anchor": "nothing-persisted",
    "body": "No session row, no message rows, no metrics, no attachment store. The transcript lives entirely in memory and is wiped when the overlay closes, along with the picked model, persona, tone, per-chat instructions, and parameters state."
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Ollama only",
    "anchor": "ollama-only",
    "body": "The model picker inside Private Chat only lists local Ollama models. OpenAI-compatible providers are deliberately excluded — the data path for cloud providers crosses too many intermediaries to honour the \"leaves no trace\" promise."
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "MCP tools are blocked",
    "anchor": "mcp-blocked",
    "body": "MCP servers are not exposed to the model inside Private Chat. A tool call could side-channel the conversation out to a third party — that defeats the point."
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Opening and closing",
    "anchor": "opening-and-closing",
    "body": "Open Private Chat from the ghost icon in the title bar. The overlay can only be dismissed by the explicit X in its header — Esc and backdrop clicks do not close it. The wipe is destructive. Regular generation is paused while the overlay is open."
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Shaping layers",
    "anchor": "shaping-layers",
    "body": "Same persona, tone, and per-chat instructions as a regular chat. No Space context, no {{USER_NAME}} substitution, no temporal preamble — those belong to persistent chats."
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Parameters panel",
    "anchor": "parameters",
    "body": "The same parameters panel is reused, with the same Simple / Advanced toggle, model defaults, Thinking toggle, and Low VRAM toggle. It closes and wipes along with the rest of the overlay."
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Spaces",
    "anchor": "",
    "body": "A Space is a long-lived workspace built around a project: a codebase, a research question, an ongoing piece of writing. It bundles instructions, reference files, memory and pinned model defaults. Every chat created inside a Space inherits that context…"
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "What a Space holds",
    "anchor": "what-a-space-holds",
    "body": "Instructions — a system prompt that overrides the global custom instructions when set. The Space is the user explicitly opting in to space-level guidance."
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Creating and editing",
    "anchor": "lifecycle",
    "body": "Create a Space from the Spaces sidebar tab or from the in-app library tile. Each Space has a detail view with its own tabs for chats, instructions, files, memory and model defaults. Editing any field updates the…"
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Space Memory",
    "anchor": "memory",
    "body": "Optional per-Space auto-memory. After every assistant reply in a Space, Loach fires a one-shot call against the same provider and model the user is chatting with and asks it to extract durable, single-sentence facts…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Snippets",
    "anchor": "",
    "body": "A Snippet is a saved prompt with an optional pinned provider and model. Snippets live in their own sidebar tab and exist for the kind of prompt you reach for over and over — \"summarise this in three bullets\", \"review this diff for security issues\",…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Creating",
    "anchor": "creating",
    "body": "Create a Snippet with a title and the prompt body. Optionally pin it to a specific provider and model so Run always starts a chat there. Pinning is a nice fit for prompts that genuinely need a particular model — a…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Running",
    "anchor": "running",
    "body": "Hit Run on a Snippet to open a fresh chat (with the pinned model if any) and prime the composer with the snippet's prompt. You can edit the prompt before sending — Snippets are a starting point, not a one-shot button."
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Bookmark assistant replies as Snippets",
    "anchor": "bookmark-replies",
    "body": "Right-click any assistant message and pick Save as snippet . Loach pre-fills the editor with that text so you can turn a good reply into a reusable prompt without copy-pasting."
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "The library",
    "anchor": "library",
    "body": "The Snippets tab shows a tile grid sorted by recency, with a search field at the top. Each tile has a … menu for edit and delete."
  },
  {
    "title": "Chat archive",
    "url": "pages/features/chat-archive.html",
    "heading": "Chat archive",
    "anchor": "",
    "body": "Some chats you want to keep but stop seeing every day. The archive moves them out of the sidebar without deleting anything — they stay searchable and you can pull them back at any time."
  },
  {
    "title": "Chat archive",
    "url": "pages/features/chat-archive.html",
    "heading": "Archiving a chat",
    "anchor": "archiving",
    "body": "Open the per-row menu in the sidebar (or right-click the row) and pick Move to Archive . The chat disappears from the main list immediately. The same option lives in the chat's own header menu."
  },
  {
    "title": "Chat archive",
    "url": "pages/features/chat-archive.html",
    "heading": "The archive view",
    "anchor": "archive-view",
    "body": "The archive lives at Settings → Archive . Open, Unarchive, Permanently delete, Archive all, and Remove all — the last one permanently deletes every archived chat in one step, guarded by a typed-confirm dialog because it is irreversible."
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "Search",
    "anchor": "",
    "body": "Loach has two complementary search surfaces: a global palette for jumping anywhere in the app, and a browser-style finder for the chat you are currently looking at."
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "The global palette",
    "anchor": "palette",
    "body": "Press Cmd / Ctrl + K (or click the search pill in the title bar) to open the palette. It cross-searches:"
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "Find within a chat",
    "anchor": "in-chat",
    "body": "Press Cmd / Ctrl + F inside a chat to open the in-transcript finder. It works like browser find: type to search, matches highlight inline, and you can step through them with the keyboard."
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Import and export context",
    "anchor": "",
    "body": "Chats are not locked into Loach. You can move a conversation in or out as either structured JSON or human-readable Markdown, and re-import context into any other chat."
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Export",
    "anchor": "export",
    "body": "From the chat header, pick Export → JSON or Export → Markdown . The native save dialog opens; the chosen path is owned by the app backend, not the renderer."
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Import context",
    "anchor": "import",
    "body": "From any chat's header, pick Import context and paste exported JSON, exported Markdown or just plain text. Loach parses what you give it into messages and appends them to the current chat. The previous conversation is…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Attachments",
    "anchor": "",
    "body": "Drag and drop files into the composer, or click the + icon to open the native file picker. Loach parses each file and inlines its contents into the request — there is no separate upload step and nothing leaves your machine unless you are using a cloud…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Supported file types",
    "anchor": "supported-types",
    "body": "Loach recognises three flavours of attachment:"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "How attachments enter the prompt",
    "anchor": "how-it-works",
    "body": "Each attachment is rendered into the user turn as its own block, with the filename as a header so the model knows what it is looking at. Multiple files in one message work — Loach concatenates them in the order you…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Caps and truncation",
    "anchor": "caps-and-truncation",
    "body": "To keep the prompt manageable, Loach applies sensible per-file and per-message limits. When a long PDF or DOCX exceeds its per-file budget, the file chip shows a truncation badge and a one-line note is added inline so…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Files Loach cannot decode",
    "anchor": "unknown-formats",
    "body": "Legacy .doc files, archives, binaries and other formats Loach does not parse are kept in the transcript and announced to the model by name, but no readable content is inlined. The model can still acknowledge that \"you…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Previews",
    "anchor": "previews",
    "body": "Clicking an attachment chip opens a per-type preview. Images open in a lightbox with Save. PDFs open as a multi-page rendered preview with Save. Text and code open in the Code canvas with language-aware highlighting. DOCX and binary files open a file-info card with Save so you can still pull the attachment back out."
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "Voice dictation",
    "anchor": "",
    "body": "A mic button in the composer turns speech into text in real time. It is built on the WebView's native SpeechRecognition API, so there is no extra model to install — but it also means the platform itself decides what happens to the audio."
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "How it works",
    "anchor": "how-it-works",
    "body": "Click the mic icon to start recording. The current contents of the composer are snapshotted as your \"base text\"; interim guesses render as a preview appended to the base while you speak, and final phrases get committed…"
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "Where it shows up",
    "anchor": "availability",
    "body": "Voice dictation depends on the platform exposing the Web Speech API. In practice:"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Web fetch",
    "anchor": "",
    "body": "Drop an http:// or https:// URL into a prompt and Loach downloads the page, strips the markup to readable text and appends it to your message as a fenced block. The model sees the contents of the page alongside your question, no separate browser extension…"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Off by default",
    "anchor": "opt-in",
    "body": "Loach is offline-first. Web fetch is the only built-in tool that reaches out to the network on your behalf, so it ships off . Turn it on in Settings → Tools when you want it — or leave it off if you would rather…"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "How it works",
    "anchor": "how-it-works",
    "body": "When you send a message, Loach scans it for URLs. For each one it finds:"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Safety guards",
    "anchor": "safety",
    "body": "© ZTCS. Loach Docs."
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Temporal awareness",
    "anchor": "",
    "body": "Out of the box, most models do not know what day it is. Temporal awareness fixes that by prepending a short \"current date / time / timezone\" preamble to every system prompt — only when the prompt does not already pull those values in itself."
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Enabling",
    "anchor": "enabling",
    "body": "Toggle Settings → General → Temporal awareness . New chats will start including the preamble immediately. Existing chats inherit the new setting on their next message."
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "How it decides to fire",
    "anchor": "how-it-fires",
    "body": "Loach scans your effective system prompt (after the global → Space → per-chat cascade ) for any of the {{CURRENT_*}} placeholders:"
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Why it matters",
    "anchor": "why",
    "body": "Many factual queries depend on \"today\": meeting scheduling, deadlines, age calculations, news cut-offs. Without temporal awareness the model relies on whatever date it was trained around, which is almost certainly…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "MCP support",
    "anchor": "",
    "body": "Loach speaks the Model Context Protocol (MCP) over the Streamable HTTP transport. Register one or more servers in Settings → MCP and their tools become available to the model during a chat — bringing structured external capabilities into the conversation."
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "What is MCP?",
    "anchor": "what-is-mcp",
    "body": "MCP is an open protocol that lets models call structured tools served by a separate process. Where Web fetch just hands the model a page of text, an MCP server can expose typed tools (\"list files in this repo\", \"search…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Registering a server",
    "anchor": "registering",
    "body": "Each MCP entry has:"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Safety guards",
    "anchor": "safety",
    "body": "URLs are validated, headers are checked for size and disallowed characters, and per-request bodies are capped so a misconfigured or malicious server cannot exhaust the app. Each request also has a sensible timeout. Same-server duplicate tool names are de-duped at registration so a chat never sees colliding entries from the same source. MCP is deliberately not exposed inside Private Chat."
  },
  {
    "title": "Default model selector",
    "url": "pages/features/default-model.html",
    "heading": "Default model selector",
    "anchor": "",
    "body": "When you start a fresh chat, which model should it open with? Settings → General → Default model answers that question. Three modes, picked according to how predictable you want new chats to feel."
  },
  {
    "title": "Default model selector",
    "url": "pages/features/default-model.html",
    "heading": "The three modes",
    "anchor": "modes",
    "body": "Use most recent (default) — pick up wherever you left off. The most recently used (provider, model) pair from your existing chats wins."
  },
  {
    "title": "Default model selector",
    "url": "pages/features/default-model.html",
    "heading": "What can override it",
    "anchor": "overrides",
    "body": "The global default is the last word for plain new chats. But:"
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Model preloading",
    "anchor": "",
    "body": "When Default model preload is on, Loach sends an empty chat to the resolved default model at app launch — warming it into VRAM so the first real prompt of the session streams without the usual cold-start pause."
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Enabling",
    "anchor": "enabling",
    "body": "Toggle Settings → General → Default model preload . It is off by default, and it is Ollama-only — hosted providers do not have a meaningful concept of warm vs cold from your side."
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "The trade-off",
    "anchor": "trade-off",
    "body": "Preloading pins VRAM at launch even if you only opened Loach to re-read an old conversation. That is why it ships off: many users only want VRAM consumed when they are about to actually chat. Turn it on if you launch…"
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Which model gets warmed",
    "anchor": "how-it-resolves",
    "body": "Preload resolves through the same logic as Default model :"
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Low VRAM mode",
    "anchor": "",
    "body": "Low VRAM mode sends Ollama's low_vram flag with every request, asking the daemon for smaller batches and a leaner KV cache. It trades throughput for the ability to run on hardware that would otherwise OOM."
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Where to set it",
    "anchor": "where",
    "body": "There are two places this lives:"
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Which one wins",
    "anchor": "precedence",
    "body": "The global setting overrides the per-chat toggle. When the global pin is on, the per-chat toggle shows up as pinned and disabled, with a pointer back to the setting so you understand why it cannot be flipped from the…"
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Ollama only",
    "anchor": "ollama-only",
    "body": "The flag is meaningful only for the local Ollama backend. Loach does not send it to OpenAI-compatible endpoints — hosted services have no concept of your VRAM budget."
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "App lock",
    "anchor": "",
    "body": "App lock is an optional credential gate that runs before any chat data hydrates. Configure it in Settings → Security ."
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "PIN, password, or both",
    "anchor": "modes",
    "body": "You can require any of:"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "How credentials are stored",
    "anchor": "storage",
    "body": "Loach never writes the PIN or password to disk in plaintext, and never stores them in the SQLite database. The lock blob — a salted hash produced by a modern password hashing function — lives in the OS credential…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "The lock screen",
    "anchor": "lock-screen",
    "body": "On launch, the lock screen fills the window until you authenticate. When both a PIN and a password are required, the PIN field is shown first. A wrong attempt clears the PIN field but keeps the password field, so you…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "Rate limiting",
    "anchor": "rate-limit",
    "body": "After several consecutive failed unlocks the unlock command is refused for an escalating cool-off window — from tens of seconds up to a couple of hours after persistent failures. The counter resets on a successful…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "Re-authentication for destructive actions",
    "anchor": "reauth",
    "body": "Even after you unlock the app, changing or removing the lock and the destructive Data management commands (Import, Wipe user data, Factory reset) ask for your current credentials again. This means a compromised…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Data management",
    "anchor": "",
    "body": "Settings → Data is where backups, restores and cleanups live. Loach stores everything local-first, so you are the one who decides where your data goes — and you can take it with you."
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Export everything",
    "anchor": "export",
    "body": "Produces a single JSON blob containing every chat, message, Space, file, memory, snippet, MCP server and setting. The native save dialog opens; the file is written from the app backend, so the renderer never sees the…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Import",
    "anchor": "import",
    "body": "Open a previously exported JSON file. Loach reports per-table row counts in a toast on success, so you can see at a glance what came back in. If app lock is configured, Import asks for your current credentials before…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Wipe user data",
    "anchor": "wipe",
    "body": "Drops chats, Spaces, snippets, MCP servers and memories. Keeps app settings and the stored OpenAI key, so the app remains usable immediately afterwards. Gated on app-lock credentials when a lock is configured."
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Factory reset",
    "anchor": "factory-reset",
    "body": "Wipe user data plus clear all settings plus remove the OpenAI key from the credential store. Re-runs onboarding on next launch. Irreversible."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Themes",
    "anchor": "",
    "body": "Loach ships two themes, three colour modes and three font sizes. Everything updates instantly — no reload — and your choice is remembered across launches."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Themes",
    "anchor": "themes",
    "body": "Solid — calm flat background, azure accent. The default if you want minimal visual noise."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Colour modes",
    "anchor": "colour-modes",
    "body": "Independent of the theme, you can pick:"
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Font size",
    "anchor": "font-size",
    "body": "Pick Small , Normal or Large . The choice is applied as a scale to every rem-based and pixel-based text size in the app, so headings, body copy and chrome stay in proportion."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Window chrome",
    "anchor": "window-chrome",
    "body": "Loach uses a borderless window on both Windows and Linux. The title bar hosts the window controls (minimise, maximise, close) inline — you do not lose any controls by going borderless."
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "OTA updates",
    "anchor": "",
    "body": "Loach has a built-in updater so you do not have to keep an eye on the releases page. New features, performance work and security patches arrive directly from the app for the install formats that support it."
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "By install format",
    "anchor": "install-formats",
    "body": "Windows (NSIS) — the updater downloads the new package and a click on Install update runs a passive install in place. No re-download from a browser needed."
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "What's new",
    "anchor": "release-notes",
    "body": "Every release ships with a markdown notes file that populates both the GitHub release body and the in-app Updates panel when an upgrade is available. Skim it before clicking install if you want to know what is changing."
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "Signing",
    "anchor": "signing",
    "body": "Update bundles are cryptographically signed. The updater verifies the signature against a key bundled with the app before replacing any binary on disk, so a man-in-the-middle on the download channel cannot swap in a…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Onboarding wizard",
    "anchor": "",
    "body": "A six-step wizard runs on first launch and after a factory reset. Each step writes its choice straight into settings, so closing the wizard part-way still leaves the app in a consistent state — you can finish setting things up from Settings later."
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "The steps",
    "anchor": "steps",
    "body": "1. Welcome — a brief intro card. Click Get started to move on."
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Recommended defaults",
    "anchor": "recommended-defaults",
    "body": "On the Features step, Loach pre-selects the toggle states that make sense for most people:"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Dismissing and resuming",
    "anchor": "dismissing",
    "body": "Press Esc or click &times; on any step to close the wizard. Steps you have completed stay completed; the rest can be filled in later from Settings . The wizard does not re-appear on subsequent launches unless you run a…"
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Keyboard shortcuts",
    "anchor": "",
    "body": "Loach is keyboard-friendly. The shortcuts below work everywhere unless something modal is on top, like the lock screen or the onboarding wizard."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Global",
    "anchor": "global",
    "body": "Cmd / Ctrl + K — open the search palette. Cross-searches chats, Spaces and Snippets."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "In the composer",
    "anchor": "composer",
    "body": "Enter — send the message."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "In the search palette",
    "anchor": "search-palette",
    "body": "&uarr; / &darr; — move between results."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Where shortcuts do not apply",
    "anchor": "system",
    "body": "The search palette and global shortcuts are suppressed while the app lock screen or the onboarding wizard owns the window — both are deliberate gates that cannot be bypassed by keyboard."
  },
  {
    "title": "Troubleshooting",
    "url": "pages/troubleshooting.html",
    "heading": "Troubleshooting",
    "anchor": "",
    "body": "Common problems with Loach and how to fix them. Pick a category — each entry follows the same shape: a short description of what you're seeing, then what to do about it."
  },
  {
    "title": "Troubleshooting",
    "url": "pages/troubleshooting.html",
    "heading": "Categories",
    "anchor": "categories",
    "body": "Providers, messages, performance, attachments, web fetch, MCP, spaces, memory, app lock, models editor, updates, data, appearance, search palette, platform."
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "Ollama is installed but Loach can't see it",
    "anchor": "ollama-unreachable",
    "body": "The Providers panel says Ollama isn't reachable, or the model dropdown is empty. Make sure ollama serve is running; check the Base URL in Settings → Providers → Ollama (default http://localhost:11434); refresh; allow inbound port and set OLLAMA_HOST=0.0.0.0 for remote hosts."
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "OpenAI says \"invalid key\" or returns 401",
    "anchor": "openai-401",
    "body": "Re-enter the key (a trailing space silently fails). Confirm the key is active on your dashboard. For custom OpenAI-compatible endpoints, the Base URL should end with /v1 and the endpoint must accept Authorization: Bearer headers."
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "Key won't save on Linux",
    "anchor": "linux-secret-service",
    "body": "Loach uses the system Secret Service. On minimal Linux installs there is none — install gnome-keyring or KWallet, make sure the login session is unlocked, then restart Loach."
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "Models list shows no models",
    "anchor": "empty-model-list",
    "body": "Ollama is reachable but no models pulled. In the Models tab click Pull a model and type a tag, e.g. llama3.1:8b."
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "My new message is stuck on \"waiting\"",
    "anchor": "stuck-waiting",
    "body": "Loach runs one generation at a time across all chats. Your message is parked in a FIFO queue. Wait, or click Respond now in the busy chat to cancel and jump the line."
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "The reply stopped halfway and shows an error",
    "anchor": "reply-half-error",
    "body": "Partial stream is kept — use Copy raw to preserve it. Send the same prompt again or click Regenerate. For repeated errors, see Providers & connections or Performance & VRAM."
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "I see no \"thinking\" trace even though the model supports reasoning",
    "anchor": "no-thinking-trace",
    "body": "Confirm the Thinking toggle in the Parameters sidebar. Verify the model advertises the thinking capability (badge in Models tab). Thinking is Ollama-only — OpenAI providers ignore the toggle."
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "Tokens-per-second or token count chip is missing",
    "anchor": "missing-stats",
    "body": "Metrics are shown when the provider reports them. Most OpenAI-compatible proxies omit timing fields, so those chats only show token counts (or nothing)."
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "Replies are off-topic, repetitive, or too short",
    "anchor": "bad-output",
    "body": "Open the Parameters sidebar — lower temperature, raise max tokens or num_ctx, increase repeat_penalty (1.1–1.3) for loops, or Reset to defaults."
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "Ollama crashes with \"out of memory\" or the model fails to load",
    "anchor": "ollama-oom",
    "body": "Turn on Low VRAM mode, lower num_ctx, reduce GPU layer count to push more onto CPU/RAM, or pick a smaller quantization (q4_K_M instead of q8_0) or a smaller parameter size."
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "The UI feels sluggish",
    "anchor": "sluggish-ui",
    "body": "Switch the theme from Aurora to Solid in Settings → Appearance — Aurora's animated gradient is heavy on weak GPUs. Close very long chats while testing."
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "The first reply takes forever, even on a fast model",
    "anchor": "slow-first-reply",
    "body": "Ollama loads the model into VRAM on first use. Turn on Settings → General → Default model preload to warm it at launch, at the cost of pinning VRAM as soon as Loach opens."
  },
  {
    "title": "Attachments (troubleshooting)",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "\"File too large\" when dropping a file",
    "anchor": "file-too-large",
    "body": "There's a 20 MB cap per file. Split large logs or paste the relevant section as text."
  },
  {
    "title": "Attachments (troubleshooting)",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "The PDF came in empty or with garbled text",
    "anchor": "empty-pdf",
    "body": "Loach extracts text from PDFs, but scanned PDFs (image pages with no text layer) have nothing to extract. Run the PDF through OCR first, or paste the relevant pages as plain text."
  },
  {
    "title": "Attachments (troubleshooting)",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "The DOCX won't attach",
    "anchor": "docx-rejected",
    "body": "Only .docx is supported, not legacy .doc. Open the file in Word or LibreOffice and Save As → Word Document (.docx)."
  },
  {
    "title": "Attachments (troubleshooting)",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "A long document shows a \"content truncated\" footer",
    "anchor": "content-truncated",
    "body": "Per-file cap is 200,000 characters; total inlined content per message is 500,000 characters. Trim the document or split it across several messages."
  },
  {
    "title": "Attachments (troubleshooting)",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "Images don't seem to be working",
    "anchor": "vision-images",
    "body": "The model needs vision capability — the tile shows a vision badge in the Models tab when supported. Switch to a vision-capable model (Llava, Llama 3.2 Vision, GPT-4o)."
  },
  {
    "title": "Web fetch & MCP",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "Pasted URL is ignored",
    "anchor": "url-ignored",
    "body": "Web fetch is off by default — turn it on in Settings → Tools → Web fetch. Only http:// and https:// URLs are fetched. Up to 5 URLs per message are followed."
  },
  {
    "title": "Web fetch & MCP",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "\"URL blocked\" for localhost or my office VPN",
    "anchor": "url-blocked",
    "body": "Intentional. The SSRF guard rejects any URL whose resolved IP lands on loopback, link-local, or private RFC1918 ranges, even if the hostname resolves there via DNS. Copy and paste the page text instead."
  },
  {
    "title": "Web fetch & MCP",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "A URL fetch silently produces a \"fetch failed\" stub",
    "anchor": "fetch-failed",
    "body": "The fetch hit a limit: 30 s total or 10 s connect timeout, 5 MB body cap, or a non-2xx HTTP response. Slow, large, or user-agent-gated pages will fail."
  },
  {
    "title": "Web fetch & MCP",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "MCP \"Test connection\" fails",
    "anchor": "mcp-test-fail",
    "body": "Confirm the URL is the Streamable-HTTP endpoint (stdio and SSE are not supported). Add an Authorization header if required. Response body must fit under 4 MiB. Per-request timeout is 30 s."
  },
  {
    "title": "Spaces & memory (troubleshooting)",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Memories aren't being saved",
    "anchor": "memory-not-saved",
    "body": "Extraction runs only after a complete assistant reply. The Memory toggle must be on. Each fact must be under 280 characters. Tiny models often return empty extractions — try a larger one."
  },
  {
    "title": "Spaces & memory (troubleshooting)",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Memory captured something wrong or private",
    "anchor": "bad-memory",
    "body": "Open the Space's Memory tab and click the row to edit or delete it. Turning the toggle off only stops new writes; existing memories ride along until you remove them."
  },
  {
    "title": "Spaces & memory (troubleshooting)",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Reference files won't add to a Space",
    "anchor": "reference-cap",
    "body": "Per-Space cap is 200 MB total across all files. Remove older references or move content into a smaller file."
  },
  {
    "title": "Spaces & memory (troubleshooting)",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Space instructions seem to override my custom instructions",
    "anchor": "space-instructions",
    "body": "By design. When a Space has its own instructions, they replace the global ones for chats in that Space. Clear them or repeat the relevant parts."
  },
  {
    "title": "App lock (troubleshooting)",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "I forgot my PIN or password",
    "anchor": "forgot-pin",
    "body": "No recovery path. The lock blob is hashed with Argon2id in the OS credential store. Try the hint if you set one, or factory reset (wipes everything). Set a hint when you create a lock."
  },
  {
    "title": "App lock (troubleshooting)",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "\"Too many attempts\" — the unlock button is greyed out",
    "anchor": "too-many-attempts",
    "body": "After 5 consecutive failed attempts, Loach starts an escalating cool-down (30 s → 60 s → 2 min … up to 2 h). Wait, or restart the app — the counter resets on restart and on successful unlock."
  },
  {
    "title": "App lock (troubleshooting)",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "Changing or removing the lock asks for my current password",
    "anchor": "reauth-prompts",
    "body": "Intentional. Re-authentication is required for changing/removing the lock, importing data, wiping user data and factory resetting, so a compromised UI process can't quietly disable the gate."
  },
  {
    "title": "Models editor (troubleshooting)",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "\"Save as…\" rejects my Modelfile",
    "anchor": "save-as-rejected",
    "body": "Base tag must only contain letters, digits, . _ / - (no spaces or quotes). SYSTEM and TEMPLATE bodies cannot contain triple quotes. Save as always writes a new model — replace by saving under a new name then deleting the old one."
  },
  {
    "title": "Models editor (troubleshooting)",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "A model pull is stuck",
    "anchor": "pull-stuck",
    "body": "Cancel and start the pull again. Confirm Ollama is reachable (Providers panel goes red if not). Check disk space on Ollama's model cache drive."
  },
  {
    "title": "Models editor (troubleshooting)",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "Can't delete a model",
    "anchor": "cant-delete",
    "body": "Switch every chat off this model first (pick a different one from the model dropdown), then retry. Ollama refuses to delete a model currently loaded in VRAM."
  },
  {
    "title": "Updates (troubleshooting)",
    "url": "pages/troubleshooting/updates.html",
    "heading": "No \"Install update\" button on Linux",
    "anchor": "no-install-button-linux",
    "body": "Expected for .deb and .rpm installs — the Tauri updater can only patch AppImage installs on Linux. Your package manager owns updates. Install the AppImage to get in-app updates."
  },
  {
    "title": "Updates (troubleshooting)",
    "url": "pages/troubleshooting/updates.html",
    "heading": "\"Up to date\" but I see a newer version on GitHub",
    "anchor": "stale-up-to-date",
    "body": "The updater only reads published releases, not drafts. Wait until the release is published, or download manually."
  },
  {
    "title": "Updates (troubleshooting)",
    "url": "pages/troubleshooting/updates.html",
    "heading": "Update download or signature fails",
    "anchor": "signature-fail",
    "body": "Re-run the check (transient network failures are common). Signature errors usually mean the release is mid-publish — wait a few minutes. Fallback: download the installer directly."
  },
  {
    "title": "Data, import & export (troubleshooting)",
    "url": "pages/troubleshooting/data.html",
    "heading": "Import won't accept my JSON file",
    "anchor": "import-rejected",
    "body": "Import expects a full Loach export from Settings → Data → Export everything. Single-chat exports (per-chat Export menu) are for sharing or archiving outside the app, not as import sources."
  },
  {
    "title": "Data, import & export (troubleshooting)",
    "url": "pages/troubleshooting/data.html",
    "heading": "\"Wipe user data\" didn't remove my OpenAI key",
    "anchor": "wipe-keeps-key",
    "body": "By design. Wipe user data removes chats, Spaces, snippets, MCP servers and memories but keeps app settings and your stored API key. Use Factory reset to clear the key too."
  },
  {
    "title": "Appearance & window (troubleshooting)",
    "url": "pages/troubleshooting/appearance.html",
    "heading": "Aurora theme tears or stutters",
    "anchor": "aurora-tearing",
    "body": "Switch to the Solid theme in Settings → Appearance. Aurora relies on GPU compositing; integrated GPUs and remote desktop sessions don't always cope."
  },
  {
    "title": "Appearance & window (troubleshooting)",
    "url": "pages/troubleshooting/appearance.html",
    "heading": "Font size change didn't fully apply",
    "anchor": "partial-font-scale",
    "body": "A few elements (the title bar, native dialogs) follow the OS font scale, not Loach's. Adjust system display scaling alongside the in-app setting if you need uniformity."
  },
  {
    "title": "Search palette (troubleshooting)",
    "url": "pages/troubleshooting/search-palette.html",
    "heading": "Cmd/Ctrl+K does nothing",
    "anchor": "shortcut-dead",
    "body": "The palette is suppressed while the onboarding wizard or the lock screen owns the window. Finish onboarding or unlock the app first."
  },
  {
    "title": "Platform (troubleshooting)",
    "url": "pages/troubleshooting/platform.html",
    "heading": "macOS — there's no macOS build",
    "anchor": "macos",
    "body": "Not currently supported. The codebase is Tauri 2 and portable in principle, but no builds, signing, or test coverage exist for macOS yet."
  },
  {
    "title": "Platform (troubleshooting)",
    "url": "pages/troubleshooting/platform.html",
    "heading": "Windows: \"Credential Manager access denied\"",
    "anchor": "windows-credman",
    "body": "Some corporate group policies block apps from writing to Credential Manager. Loach cannot store secrets without it. Ask your IT admin to allow Credential Manager writes for the Loach process, or use a personal machine."
  }
]
;
