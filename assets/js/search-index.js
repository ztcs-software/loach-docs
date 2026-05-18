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
    "anchor": "highlights",
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
    "body": "A Persona is a role the model takes on — Code Reviewer, Translator, ELI5. A Tone is the delivery style — Formal, Casual, Concise, Detailed. Both layer on top of your custom instructions."
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
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Tech and stack",
    "anchor": "tech",
    "body": "Tauri 2.x Rust desktop shell, React 18 with Vite 7 and TypeScript frontend, Tailwind CSS + shadcn/ui, Zustand state, SQLite via rusqlite, keyring crate, argon2, reqwest with rustls, react-markdown with remark-gfm and rehype-highlight, pdfjs-dist and mammoth."
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
    "body": "Switch between Ollama local models and any OpenAI-compatible endpoint from the chat header."
  },
  {
    "title": "Local model management",
    "url": "pages/features/model-management.html",
    "heading": "Local model management",
    "anchor": "",
    "body": "Pull, copy, customize and delete local models from inside the app. The Models library tab is a full UI over the Ollama HTTP API."
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Per-chat parameters",
    "anchor": "",
    "body": "temperature, top_k, top_p, min_p, max_tokens, context length, per-chat system prompts. Layered over Modelfile and per-model defaults."
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "Personas and tones",
    "anchor": "",
    "body": "Pick a role (Code Reviewer, Translator, ELI5) and a delivery style (Formal, Casual, Concise, Detailed). They layer on top of your custom instructions."
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Custom instructions",
    "anchor": "",
    "body": "Free-text instructions injected into the system prompt. Set globally, per Space, or per chat. Lower scope wins over higher scope."
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "Generation stats",
    "anchor": "",
    "body": "Inline tok/s, total tokens and elapsed time under every model turn so you always know how the model performed."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Markdown rendering",
    "anchor": "",
    "body": "Full GitHub-flavoured Markdown with tables, task lists and LaTeX support, rendered live as the response streams."
  },
  {
    "title": "Code blocks & canvas",
    "url": "pages/features/code-canvas.html",
    "heading": "Code blocks & canvas",
    "anchor": "",
    "body": "Code blocks are syntax-highlighted with line numbers and offer copy, export and open in canvas options. The code canvas opens any code block in a wider, theme-aware view."
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Spaces",
    "anchor": "",
    "body": "Group chats around a project, with shared instructions, reference files and memory."
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Snippets",
    "anchor": "",
    "body": "Save reusable prompts with an optional pinned model. Click Run to open a fresh chat pre-filled with the prompt."
  },
  {
    "title": "Chat archive",
    "url": "pages/features/chat-archive.html",
    "heading": "Chat archive",
    "anchor": "",
    "body": "Move chats out of the sidebar without deleting them. Restore or delete them from a dedicated archive view."
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "Search",
    "anchor": "",
    "body": "Search across chats, spaces and snippets, plus a browser-style in-chat finder with phrase highlighting."
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Import and export context",
    "anchor": "",
    "body": "Export chat context to JSON or Markdown, and paste exported data back into any chat's context."
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "Voice dictation",
    "anchor": "",
    "body": "A mic button in the composer turns speech into text in real time. Useful for long prompts and hands-free use."
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Web fetch",
    "anchor": "",
    "body": "Drop a URL into a message. Loach fetches the page, sanitizes it, and inlines the content into the request."
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Temporal awareness",
    "anchor": "",
    "body": "Optionally inject current date, time, weekday and timezone into the system prompt so the model can answer what day is it today correctly."
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "MCP support",
    "anchor": "",
    "body": "Register Model Context Protocol servers (Streamable HTTP), test the handshake and inspect the tools they provide. Tools become available to the model during a chat."
  },
  {
    "title": "Default model selector",
    "url": "pages/features/default-model.html",
    "heading": "Default model selector",
    "anchor": "",
    "body": "Pick a model new chats open with, per provider. No need to re-select on each fresh conversation."
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Model preloading",
    "anchor": "",
    "body": "Optionally warm your default local model into VRAM at launch so the first message streams faster."
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Low VRAM mode",
    "anchor": "",
    "body": "Global or per-chat toggle that sends Ollama's low_vram flag with every request — useful on lower-spec devices."
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "App lock",
    "anchor": "",
    "body": "Optional PIN, password or PIN + password gate at launch. Credentials are hashed with Argon2id and stored in the OS credential manager."
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Data management",
    "anchor": "",
    "body": "Make a backup of your content to a JSON file, restore data, or permanently delete everything with a few clicks."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Themes",
    "anchor": "",
    "body": "Two themes — Aurora (glassy, gradient) and Solid (flat) — both available in Dark and Light variants."
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "OTA updates",
    "anchor": "",
    "body": "Get new features, bug fixes, performance improvements and security patches directly from the app, no manual download needed."
  }
]
;
