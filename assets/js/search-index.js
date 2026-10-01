window.LOACH_SEARCH_INDEX = [
  {
    "title": "Introduction",
    "url": "index.html",
    "heading": "Introduction",
    "anchor": "",
    "body": "A native, local-first AI workspace for desktops. Run local LLMs with Ollama, or connect any OpenAI-compatible endpoint side-by-side - with a focused UX, native apps for Windows, Linux and macOS, and powerful features out of the box."
  },
  {
    "title": "Introduction",
    "url": "index.html",
    "heading": "What is Loach?",
    "anchor": "what-is-loach",
    "body": "Loach is an all-in-one desktop AI workspace built around a single idea: talking to an LLM should feel effortless. Simple from the first click and ready to grow with you as your needs do. It talks to a local Ollama server and accepts any OpenAI-compatible endpoint as a provider - including llama.cpp, LM Studio, vLLM…"
  },
  {
    "title": "Introduction",
    "url": "index.html",
    "heading": "Highlights",
    "anchor": "highlights",
    "body": "Two providers, side-by-side Switch between a local Ollama server and any OpenAI-compatible endpoint right from the chat header - and start Ollama from Loach when it isn't running. Work in folders Add a folder to a chat and the model can list, find, read, search and edit its files - sandboxed, with no shell, and…"
  },
  {
    "title": "Introduction",
    "url": "index.html",
    "heading": "Where to next?",
    "anchor": "next",
    "body": "Installation - pre-built packages for Windows, Linux & macOS, or build from source. Quick start - your first chat with a local model in two minutes. Core concepts - providers, chats, Spaces, Snippets, parameters. Features - the full feature reference. FAQ - the questions people ask first. Troubleshooting - common…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Installation",
    "anchor": "",
    "body": "Loach ships as a native desktop app for Windows, Linux and macOS. Install from a pre-built package, or build from source."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "System requirements",
    "anchor": "requirements",
    "body": "Platform Supported Packages Windows Windows 10 or 11, x86_64 .exe (NSIS installer) Linux x86_64 with glibc 2.35 or newer - Ubuntu 22.04, Debian 12 or later .deb, .rpm and .AppImage macOS macOS 11 (Big Sur) or later, Apple Silicon only .dmg Loach itself is light. What your machine needs depends on the local models you…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Install from a pre-built package",
    "anchor": "prebuilt",
    "body": "With every stable release the project publishes ready-to-install packages for each supported operating system. Head over to the GitHub releases page and download the file that matches your platform. Download the latest release → Heads up To use local models, make sure Ollama is installed. If it isn't running, the…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Windows",
    "anchor": "windows",
    "body": "Download the .exe from the latest release. Run the installer and follow the prompts. It installs for your user account, so it doesn’t need administrator rights. Launch Loach from the Start menu. WebView2 is required and is pre-installed on Windows 11. On Windows 10 the installer will pull it in if it's missing."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Linux",
    "anchor": "linux",
    "body": "From the folder you downloaded the package to, pick the format for your distribution: # Debian / Ubuntu sudo apt install ./Loach_*_amd64.deb # Fedora / RHEL sudo dnf install ./Loach-*.x86_64.rpm # openSUSE sudo zypper install ./Loach-*.x86_64.rpm # Any distro chmod +x Loach_*_amd64.AppImage ./Loach_*_amd64.AppImage…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "macOS",
    "anchor": "macos",
    "body": "Download the .dmg from the latest release. Open it and drag Loach into Applications. On first launch macOS will block the app with a “Loach is damaged and can’t be opened” or “Apple cannot verify…” warning, because the build is not Apple-notarized. Bypass it once and the app runs normally (see below). For “Apple…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Build from source",
    "anchor": "source",
    "body": "If you want the bleeding edge or you're contributing patches, build from the repository."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Prerequisites",
    "anchor": "prerequisites",
    "body": "Node.js 20.19+ (or 22.12+) and npm - Vite 8 won't run on older 20.x point releases. Rust 1.88+ via rustup - the dependency tree's minimum; CI builds on 1.88.0. Platform build tooling - see the official Tauri prerequisites guide. Windows: Microsoft Visual Studio Build Tools, WebView2 runtime (pre-installed on Windows…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Clone and install",
    "anchor": "clone",
    "body": "git clone https://github.com/ztcs-software/loach.git cd loach npm install"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Run in development",
    "anchor": "dev",
    "body": "npm run tauri dev The Vite dev server runs on http://localhost:1420 and the Tauri shell embeds it."
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Build production installers",
    "anchor": "prod",
    "body": "npm run tauri -- build --no-sign --no-sign skips the signed updater artifacts, which need the release signing key (TAURI_SIGNING_PRIVATE_KEY ). Without the flag and the key, the build fails after bundling. Outputs land in src-tauri/target/release/bundle/: Windows: .exe (NSIS) Linux: .deb, .rpm and .AppImage macOS…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Linux build in Docker",
    "anchor": "docker",
    "body": "The repository’s Dockerfile builds the Linux .deb and .AppImage on Ubuntu 22.04 with the same Node.js and Rust versions CI uses, so the result runs on the oldest supported distributions. It only builds Loach; install the output on a Linux host. docker build -t loach-build. docker run --rm -v \"$PWD/dist-linux:/out\"…"
  },
  {
    "title": "Installation",
    "url": "pages/installation.html",
    "heading": "Updates",
    "anchor": "updates",
    "body": "We regularly update Loach to deliver new features, bug fixes, security improvements, and performance gains. Every install format updates from inside the app: check manually in Settings → Updates, or switch on the opt-in auto-check and Loach tells you once per launch when a new version is out. Nothing downloads until…"
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Quick start",
    "anchor": "",
    "body": "Loach has no built-in models. The very first thing to do is choose a provider: a local Ollama server, or any OpenAI-compatible HTTP endpoint."
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "First launch",
    "anchor": "first-launch",
    "body": "The first time you open Loach, a short setup wizard does most of this page for you: it finds your Ollama server (and can start it), recommends and pulls a model sized for your machine, or verifies an OpenAI-compatible endpoint, then asks for your defaults, tools and custom instructions. Every step except the provider…"
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Using with Ollama (local, recommended)",
    "anchor": "ollama",
    "body": "Install Ollama and start the server, then pull at least one model: ollama serve ollama pull gemma4:e4b # or any other tag Loach probes http://localhost:11434 on launch. Pulled models appear in the chat header dropdown automatically. The Models library tab also lets you pull new tags and customize existing ones from…"
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Using with an OpenAI-compatible endpoint",
    "anchor": "openai",
    "body": "Open Settings → Providers, paste your API key (stored safely in your OS credential manager), and point the base URL to a compatible endpoint. Local servers such as LM Studio, vLLM or llama.cpp usually need no key at all. The menu next to the base URL field fills in the common ones: Provider Base URL OpenAI…"
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Your first chat",
    "anchor": "first-chat",
    "body": "Open Loach. The sidebar lists your chats; the main area is the composer. Open the model dropdown in the chat header. It lists the models of both providers, grouped under Ollama and API. Pick a model. Type a prompt and press Enter. That's it. Tokens stream in, generation stats appear under each model turn, and you can…"
  },
  {
    "title": "Quick start",
    "url": "pages/getting-started.html",
    "heading": "Next steps",
    "anchor": "next-steps",
    "body": "Read Core concepts to understand chats, Spaces, Snippets and parameters. Skim Features to see what else is available - built-in tools, MCP servers, web fetch, code canvas, LaTeX math and more. Let the model work in a folder - add one from the + menu next to the message box. Turn on Global memories in Settings →…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Core concepts",
    "anchor": "",
    "body": "A short tour of the building blocks of Loach. Read this once and the rest of the docs will make a lot more sense."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Local-first",
    "anchor": "local-first",
    "body": "Loach is a desktop app, not a web service. There is no account, no telemetry, no required network access. Your chats and content live in a local SQLite file in your app data folder. The OpenAI-compatible API key and the app-lock credentials are kept in your operating system’s credential manager, not in plain text on…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Providers",
    "anchor": "providers",
    "body": "A provider is where Loach sends a request when you submit a prompt. Loach supports two kinds: Ollama - a local Ollama server running on your machine (or elsewhere on your network). OpenAI-compatible - any HTTP endpoint speaking the OpenAI Chat Completions protocol: OpenAI itself, llama.cpp, LM Studio, vLLM, LiteLLM…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Chats",
    "anchor": "chats",
    "body": "A chat is a single conversation. Chats appear in the sidebar and are persisted locally. Each chat remembers: The provider and model used. Its parameter overrides (see below) and its own instructions. Its messages, with their attachments and tool calls. Its Space, sidebar folder, colour label, pin and archive state…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Spaces",
    "anchor": "spaces",
    "body": "A Space groups chats that share context - instructions, reference sources and memory. Use a Space when several chats orbit the same topic: a codebase, a research question, an ongoing piece of writing. A Space’s default model is the starting point of every new chat created inside it, and each chat can still switch it.…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Memory",
    "anchor": "memory",
    "body": "Loach can remember lasting facts about you. While memory is on, after each reply it asks the same model, in a second, hidden request, to save new facts and to update or drop ones that no longer hold; every change shows a toast with Undo. There are two lists: Space memory - one per Space, on by default for a new…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Snippets",
    "anchor": "snippets",
    "body": "A Snippet is a saved, reusable prompt. Optionally pin a model to it, then click Run to open a fresh chat pre-filled with the prompt and ready to send. {{PLACEHOLDER}} variables fill in from saved values, and anything left blank is asked for when you run it. Snippets are great for: Frequently used templates…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Per-chat parameters",
    "anchor": "parameters",
    "body": "Every chat has a parameters panel where you can override sampling and runtime settings without touching the model itself. Its Simple view holds the everyday controls; Advanced adds the sampling and repetition knobs. The most useful ones: Parameter What it does Temperature Randomness. Lower = more deterministic. Top-K…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Personas and tones",
    "anchor": "personas-tones",
    "body": "A persona is a role the model takes on - Code Reviewer, Writing Editor, Translator, Explain Like I’m 5, and so on. A tone is the delivery style - Direct, Detailed, Casual, Formal, Playful, Skeptical, Socratic, and more. Both wrap around your instructions: the persona goes before them, the tone after. A persona is…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Custom instructions",
    "anchor": "custom-instructions",
    "body": "Free-text instructions that go into the system prompt. You can set them at three levels, but only one applies to a given chat - the first of these that is set: Space - the Space’s instructions, for every chat in that Space. Chat - the chat’s own Additional instructions, in the parameters panel or with /instructions.…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Context",
    "anchor": "context",
    "body": "The “context” is what Loach sends to the model on each turn: the system prompt and the message history. A context usage bar just below the message box shows how full the model’s window is. You can: Compact it - summarise older turns into the system prompt to free space, without losing your scrollback. Export it as…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Slash commands",
    "anchor": "slash-commands",
    "body": "Type / at the start of the composer to open a command palette: /fork, /regenerate, /compact, /model, /persona, /snippet, /remember and more. Tab completes, Enter runs, and destructive commands ask first. /help lists them all. See Slash commands."
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Tools and MCP",
    "anchor": "tools",
    "body": "Models that support tool calls can use tools mid-answer; each call shows up in the reply. Tools come from three places: Built-in tools - calculator, date/time, hashing, JSON, unit conversion, text diff, PDF generation and more. They run locally with no network access, and each is off until you switch it on in…"
  },
  {
    "title": "Core concepts",
    "url": "pages/concepts.html",
    "heading": "Private Chat",
    "anchor": "private-chat",
    "body": "Private Chat is an off-the-record overlay for conversations that should leave no trace. Open it from the ghost icon in the title bar or with /private. Nothing is saved: the transcript lives in memory and is wiped when you close the overlay with the × in its header. It talks to Ollama only, and gets no MCP tools, no…"
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Providers",
    "anchor": "",
    "body": "Loach doesn’t ship with built-in models. It connects to a provider you choose - local or remote. Both kinds are available side-by-side; switch from the chat header."
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Ollama (local)",
    "anchor": "ollama",
    "body": "Ollama is the easiest way to run open-weight models on your machine. Loach probes the Ollama base URL (http://localhost:11434 by default) as soon as it starts; any models you’ve pulled appear in the chat-header model picker without a refresh."
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Setup",
    "anchor": "ollama-setup",
    "body": "Install Ollama from ollama.com/download. Start the server: ollama serve (or just open the Ollama app - it runs in the background). Loach can also start it for you - see below. Pull at least one model: ollama pull gemma4:e4b. If you skip this, the onboarding wizard recommends one sized to your machine. Open Loach. The…"
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "The Models library",
    "anchor": "ollama-library",
    "body": "The Models tab inside Loach is a full UI on top of the Ollama HTTP API. From there you can: Pull new tags by name. Duplicate a model under a new tag. Customize an existing model - system prompt, prompt template, parameters - and save the result as a new model. Delete models you no longer need. See Local model…"
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Starting Ollama from Loach",
    "anchor": "ollama-start",
    "body": "You don’t have to run ollama serve yourself. When nothing is answering, the model picker in the chat header lists Ollama as Not running and offers a Start Ollama button that launches the server and swaps in the model list once it responds. Settings → Providers → Auto-launch Ollama does the same thing every time Loach…"
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Pointing at a remote Ollama",
    "anchor": "ollama-remote",
    "body": "If Ollama is running on another machine on your network, change the Ollama base URL in Settings → Providers. Make sure the remote server is reachable from your machine and listening on a routable interface (OLLAMA_HOST=0.0.0.0 on the server). Test connection under the field queries the server and reports how many…"
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "OpenAI-compatible endpoints",
    "anchor": "openai",
    "body": "Anything that speaks the OpenAI Chat Completions protocol works - the real OpenAI API, llama.cpp’s llama-server, LM Studio, vLLM, LiteLLM, OpenRouter, Groq and other proxies. Configure it in Settings → Providers: Set the API base URL, or pick one from the presets dropdown at the end of the field. It’s saved as you…"
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Common base URLs",
    "anchor": "endpoints",
    "body": "Provider Base URL OpenAI https://api.openai.com/v1 (default) vLLM http://localhost:8000/v1 LM Studio http://localhost:1234/v1 LiteLLM http://localhost:4000 llama.cpp llama-server http://localhost:8080/v1 Groq https://api.groq.com/openai/v1 OpenRouter https://openrouter.ai/api/v1 Together https://api.together.xyz/v1…"
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Default model",
    "anchor": "default-model",
    "body": "Settings → General → Default model picks the model new chats open with: whichever you used most recently, the last model you used on a given provider, or one specific model. You can still change the model per chat from the header. See Default model selector."
  },
  {
    "title": "Providers",
    "url": "pages/providers.html",
    "heading": "Preloading and Low VRAM",
    "anchor": "preload",
    "body": "Two settings worth knowing about for local providers: Model preloading - Preload on startup, under the default-model picker, warms your default Ollama model into VRAM at launch so the first message streams faster. Low VRAM mode - a global or per-chat toggle that sends Ollama’s low_vram flag with every request. Useful…"
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Features",
    "anchor": "",
    "body": "A reference for the features Loach ships with today. We’re continuously extending this list - including new RAG and agentic capabilities. Pick a category below, or open any feature for the full description."
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Chat experience",
    "anchor": "chat-experience",
    "body": "Provider selection Switch between Ollama local models and any OpenAI-compatible endpoint (OpenAI, llama.cpp, LM Studio, vLLM, Groq, OpenRouter…) directly from the chat header - and start Ollama from Loach when it isn’t running, on demand or automatically at launch. Local model management Pull, copy, customize and…"
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Organization",
    "anchor": "organization",
    "body": "Spaces Group chats around a project, with shared instructions, reference sources, memory and a default model. Every chat inside the Space inherits the context. Memory Space memory and opt-in Global memories note lasting facts about you after each reply, update or drop ones that changed, and show an Undo for every…"
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Input & output",
    "anchor": "input-output",
    "body": "Attachments Drag and drop images, text and code, PDFs and DOCX files (up to 20 MB each) into the composer. Loach extracts the text and inlines it into the request; images go to vision-capable models. Attachment previews Click an attachment to open the right viewer without leaving the chat: an image lightbox, a…"
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Advanced",
    "anchor": "advanced",
    "body": "MCP support Register Model Context Protocol servers over Streamable HTTP or as local programs (npx, uvx, node …), test the handshake and inspect their tools. A native dialog asks before any local program starts, and each tool call waits for your Allow once, Always allow or Deny unless you trust the server. Built-in…"
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Security & data",
    "anchor": "security-data",
    "body": "App lock Optional PIN, password or PIN + password gate at launch, with opt-in auto-lock after inactivity or on minimize and a lock-now shortcut. Credentials are hashed with Argon2id and stored in the OS credential manager. Data management Back up your data to a JSON file (MCP headers, environment variables and chats’…"
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Appearance & updates",
    "anchor": "appearance",
    "body": "Themes Two themes - Aurora (glassy, gradient) and Solid (flat) - each in Dark and Light, or following your system. Three font sizes scale text across the app. OTA updates Get new features, fixes and security patches directly from the app on every install format - Windows, AppImage, .deb / .rpm and macOS - with an…"
  },
  {
    "title": "Features",
    "url": "pages/features.html",
    "heading": "Reference",
    "anchor": "reference",
    "body": "Onboarding wizard The six-step first-launch wizard: welcome, provider, defaults, tools, custom instructions and a final screen. Sizes its model recommendation to your GPU (or RAM), and re-runs after a factory reset. Keyboard shortcuts Search, new chat, find, attach, delete chat, sidebar and panel toggles, lock-now…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Provider selection",
    "anchor": "",
    "body": "Loach is a chat client, not a model. Out of the box it speaks two protocols: Ollama for local models running on your machine, and any OpenAI-compatible endpoint for hosted or self-hosted services. You can keep both wired up at once and switch between them at will."
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Local: Ollama",
    "anchor": "local-ollama",
    "body": "The default backend. Loach talks to an ollama serve process over HTTP and probes it as soon as the app starts, so the models you’ve pulled are in the model picker without a refresh. The picker checks again whenever you change a base URL or key, and has its own refresh button. If Ollama is not running, the picker…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Starting Ollama from Loach",
    "anchor": "start-ollama",
    "body": "You do not have to run ollama serve by hand: Start Ollama - when the daemon is not answering, the model picker in the chat header shows a Start Ollama button. It finds the ollama program (on your PATH or in Ollama’s default install location), starts it on the host and port of your base URL, waits up to 20 seconds for…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Cloud or self-hosted: OpenAI-compatible",
    "anchor": "cloud-openai",
    "body": "Any endpoint that implements the OpenAI /chat/completions API works. That includes the real OpenAI API, plus vLLM, LM Studio, LiteLLM, OpenRouter, Groq and other proxies. Set the API base URL and OpenAI API key in Settings → Providers; the key is optional for local servers such as llama.cpp, LM Studio and vLLM. A…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "Test connection",
    "anchor": "test-connection",
    "body": "Each provider section exposes a one-click probe so you can verify a base URL (and API key) before opening a chat: Ollama - queries /api/tags and reports Connected with the number of models available, or Connection failed with the error. OpenAI-compatible - calls the endpoint’s /models listing with the stored key and…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "The model picker",
    "anchor": "model-picker",
    "body": "Every chat has a model dropdown in its header, labelled with the current model and provider. It lists both providers’ catalogs grouped by provider: Ollama, with a green tick when it’s running or an amber warning when it isn’t, and API, which shows the first 30 models the endpoint returns (or Not connected when there…"
  },
  {
    "title": "Provider selection",
    "url": "pages/features/provider-selection.html",
    "heading": "When a request fails",
    "anchor": "request-errors",
    "body": "A failed reply ends with a one-line warning that names the provider and base URL, then says what went wrong in plain words - for example “Ollama (http://localhost:11434) - could not reach the endpoint. Is it running and the URL correct?” The common cases: Out of memory - “ran out of memory loading or running the…"
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
    "body": "Every installed Ollama model gets a tile showing its name, family and on-disk size. Click a tile to open it in the Models editor, or use New chat on the tile to start a chat in that model. The header and each tile’s ⋯ menu offer: Pull model - type a tag (browse them at ollama.com/library) and press Pull or Enter.…"
  },
  {
    "title": "Local model management",
    "url": "pages/features/model-management.html",
    "heading": "The Models editor",
    "anchor": "editor",
    "body": "Opening a model loads its configuration from Ollama into a form. The header shows its family, size, parameter count, quantization and format next to New chat and Delete buttons; All models takes you back. You can: Inspect and edit the System prompt (baked in as SYSTEM; per-chat instructions still win at runtime), the…"
  },
  {
    "title": "Local model management",
    "url": "pages/features/model-management.html",
    "heading": "Modelfile safety",
    "anchor": "modelfile-safety",
    "body": "Save as new model refuses to compile a Modelfile that would smuggle in extra directives via a malicious base tag, system block or template block. The base tag may use letters, digits,., _ and - in any number of / -separated segments, plus one optional :tag - so llama3.1:8b and hf.co/user/repo:Q4_K_M both pass, while…"
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
    "body": "The panel has two views: Simple - the Thinking toggle, Context Length, the Low VRAM toggle, persona, tone and the per-chat Additional instructions box. Deliberately terse so the common knobs are reachable without scrolling. Advanced - adds Temperature, Top-P, Top-K, Min-P, Max Tokens, Repeat Penalty, Frequency and…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "How the values cascade",
    "anchor": "cascade",
    "body": "What a chat actually sends to the model is a merge of several layers. From broadest to narrowest, with later layers winning: App defaults - a universal fallback: temperature 0.7, top-p 0.95, top-k 40, min-p 0.05, max tokens 4096, context length 8K, repeat penalty 1.1, no frequency or presence penalty, and a random…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Settings reference",
    "anchor": "settings-reference",
    "body": "A short description of every knob the panel exposes, grouped the way the panel groups them. Anything tagged Ignored by OpenAI providers is sent to Ollama only - OpenAI-compatible endpoints decide that knob server-side, and the panel dims it on those chats. Temperature, Top-P, Max Tokens, both penalties and Seed are…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Thinking",
    "anchor": "ref-thinking",
    "body": "Thinking - lets the model reason step-by-step before replying. Adds latency on long answers but often improves quality on complex prompts. Only takes effect on models that advertise thinking capability; ignored by OpenAI providers. See Thinking toggle."
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Sampling",
    "anchor": "ref-sampling",
    "body": "Temperature 0–1 - controls randomness. Lower stays focused and predictable; higher gets more creative and varied. Capped at 1 because output usually breaks down beyond that. Top-P 0–1 - nucleus sampling. The model picks from the smallest set of tokens whose probabilities sum to this value. Lower = more on-track…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Length",
    "anchor": "ref-length",
    "body": "Context Length (num_ctx) - how much conversation history the model can see at once. Larger windows remember more but use more VRAM. Snaps to power-of-two stops (4K → 1M). Ignored by OpenAI providers - the server decides. The context-usage bar measures against this value, and its Expand context window button doubles…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Repetition",
    "anchor": "ref-repetition",
    "body": "Repeat Penalty 0.8–2.0 - penalizes tokens the model has just used, discouraging loops. 1.0 is off; much above 1.3 starts to sound robotic. Ignored by OpenAI providers. Frequency Penalty −2 to 2 - pushes down tokens in proportion to how often they’ve already appeared in this reply. Negative values encourage repetition…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Performance",
    "anchor": "ref-performance",
    "body": "GPU Layers (num_gpu) - how many model layers to offload to the GPU. Blank = Ollama auto-detects; 0 = CPU only; a positive integer = explicit layer count (useful when a model almost fits but its KV cache spills off the GPU). The clear button next to the field goes back to auto-detect. Ignored by OpenAI providers. Low…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Reproducibility",
    "anchor": "ref-reproducibility",
    "body": "Seed - a fixed integer makes the model’s output reproducible for the same input. Leave empty for a fresh random seed each run. The dice button generates a random seed in place, and the clear button goes back to random."
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Prompt layering",
    "anchor": "ref-prompt-layering",
    "body": "Persona - defines the assistant’s role (e.g. Code Reviewer, Writing Editor ). Layered into the system prompt at send time. See Personas and tones. Tone - style modifier appended after the system prompt. Falls back to the global default (Settings → General) when not set per chat. Additional instructions (this chat)…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Thinking toggle",
    "anchor": "thinking",
    "body": "The Thinking row is always shown, but it only switches on for Ollama models whose capabilities include thinking. On other models it is disabled with This model doesn’t support a thinking step; on OpenAI-compatible chats it is disabled and reads off. It sets the think parameter on the chat request. The default comes…"
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Low VRAM toggle",
    "anchor": "low-vram",
    "body": "Ollama-only. Forces smaller batches and a leaner KV cache - useful when you are tight on GPU memory. The per-chat toggle is overridden if Settings → Features → Low VRAM mode is enabled globally; in that case the panel shows the toggle pinned on and disabled with a pointer back to the global setting. See Low VRAM mode."
  },
  {
    "title": "Per-chat parameters",
    "url": "pages/features/parameters.html",
    "heading": "Per-chat instructions",
    "anchor": "system-prompt",
    "body": "The Additional instructions (this chat) box at the bottom of the panel holds instructions for this chat only; it saves when you click away. They replace your global custom instructions for this chat. A new chat starts with a copy of the global instructions in this box, so editing the global ones later only reaches…"
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "Personas and tones",
    "anchor": "",
    "body": "Personas and tones are two thin style layers that compose with the chat’s system prompt at send time. A persona sets the role the model plays; a tone tweaks how it speaks. They’re curated presets that play nicely with your own custom instructions rather than replacing them."
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "Personas (role)",
    "anchor": "personas",
    "body": "Pick one from the Persona row of the chat’s Parameters panel (Ctrl + Shift + P ), or type /persona <name> - for example /persona translator, or /persona none to clear it. The selected persona adds a short system prompt that frames the assistant’s job. None - no persona. Uses only your custom instructions. Code…"
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "Tones (style)",
    "anchor": "tones",
    "body": "A tone is appended after the persona and your instructions, biasing the delivery without changing the role. Default - the model’s natural voice, no override. Direct - leads with the point; drops hedges and preamble. Detailed - thorough coverage with caveats and reasoning. Casual - plain English, conversational.…"
  },
  {
    "title": "Personas and tones",
    "url": "pages/features/personas.html",
    "heading": "How they stack",
    "anchor": "how-they-stack",
    "body": "At send time the system prompt is assembled in this order: Persona - the role, first. Your instructions - whichever applies: the Space’s instructions, else the chat’s own, else your global ones (see precedence ), with the date preamble, memory and any Space sources around them. Tone - the style modifier, last.…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Custom instructions",
    "anchor": "",
    "body": "Custom instructions are the system prompt Loach sends with your messages. You can write them globally, for a single chat or for a whole Space - but they don’t merge: exactly one set applies to a chat, so it’s worth knowing which one wins."
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Where to set them",
    "anchor": "where-to-set",
    "body": "Global - Settings → General → Custom instructions, also offered by setup’s Add custom instructions step. Each new chat starts with a copy of them. Per-chat - the Additional instructions (this chat) field in the chat’s Parameters panel, saved when you click away. Or type /instructions <text>; a bare /instructions…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Precedence",
    "anchor": "precedence",
    "body": "Loach picks one set of instructions per chat, in this order: The Space’s instructions, if the chat is in a Space that has any. They replace both the global and the chat’s own instructions. Otherwise the chat’s own instructions, if its field isn’t empty. Otherwise your global custom instructions. Because a new chat…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "What else goes into the system prompt",
    "anchor": "other-layers",
    "body": "The winning instructions are the core of the system prompt, but not all of it. Around them, Loach adds: Persona and tone - the persona goes first (after the folder note and project instructions, when the chat has a working folder) and the tone last. See Personas and tones. Date preamble - a one-line date, weekday and…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Compaction summaries",
    "anchor": "compaction-summaries",
    "body": "When you compact a chat, Loach stores the summary at the top of the chat’s own instructions field, between [Loach: earlier conversation summary] and [End of Loach summary] markers. It doesn’t count as your instructions: it goes in front of whichever instructions win, so a compacted chat with no instructions of its…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Project instructions (LOACHFILE.md)",
    "anchor": "loachfile",
    "body": "When a chat works in a folder (with Settings → Tools → Workspace files on), a LOACHFILE.md at the folder’s root is added to every message: how to run the tests, what not to touch, house style. It’s read fresh each time, so an edit applies to your next message, and only its first 32 KB is used. It’s added at the very…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Template variables",
    "anchor": "template-variables",
    "body": "Global instructions, Space instructions and per-chat instructions can use these placeholders; Loach substitutes them each time it sends a message. Snippet bodies can use them too - there they’re filled in when the snippet runs. Placeholders typed into an ordinary message are sent as written. {{USER_NAME}} - Your name…"
  },
  {
    "title": "Custom instructions",
    "url": "pages/features/custom-instructions.html",
    "heading": "Examples",
    "anchor": "examples",
    "body": "“Always reply in Polish unless I write to you in English.” “You are a senior product manager. Push back on vague requirements and ask clarifying questions before answering.” “When writing code, prefer Python 3.12 with type hints and f-strings. Skip explanatory comments unless asked.” “Cite a source for every factual…"
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "Generation stats",
    "anchor": "",
    "body": "Every finished assistant reply shows a small metrics chip under the bubble, next to its … menu. It gives you a quick read on how the model performed without leaving the conversation."
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "What you see",
    "anchor": "what-you-see",
    "body": "The chip reads like ⏱ 42.3 tok/s · 512 tok · 12.10s: Tokens per second - how fast the reply was generated. Useful for comparing models on your hardware at a glance. Tokens - the completion tokens of this reply; the prompt isn’t counted. When the model used tools, every round of the reply is added up. Elapsed time…"
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "Where the numbers come from",
    "anchor": "when-its-missing",
    "body": "Ollama - reports the token count itself, and the rate uses Ollama’s own generation time, so model loading and prompt processing don’t drag it down. OpenAI-compatible - the count comes from the endpoint’s usage report when it sends one. Older proxies ignore Loach’s request for it; Loach then counts the streamed chunks…"
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "Stopped and failed replies",
    "anchor": "cancelled-replies",
    "body": "The numbers arrive only when a reply completes. A reply you stop, one that Respond now pre-empts, and one that ends in an error keep their partial text but get no chip. See Concurrency & queue for details on how partial output is preserved."
  },
  {
    "title": "Generation stats",
    "url": "pages/features/generation-stats.html",
    "heading": "Totals for a chat",
    "anchor": "stats-command",
    "body": "Type /stats in the composer for a summary of the open chat: the message count (user and assistant), the assistant tokens across every reply that has a chip, the average tokens per second, the last reply’s numbers, and the model and provider. The average divides the total tokens by the total elapsed time, so on Ollama…"
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Markdown rendering",
    "anchor": "",
    "body": "Every assistant turn is rendered as GitHub-flavoured Markdown as the response streams. You see formatted output the moment the tokens arrive, not after the model finishes."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "What works out of the box",
    "anchor": "what-works",
    "body": "Headings, lists, blockquotes - standard CommonMark. Tables - GitHub-style pipe tables with alignment. Task lists - items written as - [] and - [x] render as read-only checkboxes. Strikethrough and autolinks - ~~text~~ is struck through, and bare URLs become links. Footnotes - reference markers in the text, with the…"
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Copying and selecting",
    "anchor": "copy-and-select",
    "body": "Right-click any message bubble for a quick menu: Copy - the text you have selected inside that bubble, or the whole message when nothing is selected - and Select all, which highlights just the body text and leaves the metrics line and toggles out of the selection. Each bubble also has a … menu below it for the…"
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Your own messages",
    "anchor": "long-prompts",
    "body": "Your own messages are not rendered as Markdown: they show exactly as you typed them, line breaks included. Bubbles that paste in dozens of lines clamp to the first ten lines with a Show more toggle (and Show less to fold them again), so the assistant’s reply does not get pushed off-screen by your own input."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Regenerate the last reply",
    "anchor": "regenerate",
    "body": "The last assistant message in a chat carries a Regenerate action, and the /regenerate slash command does the same. Triggering it drops the existing reply, re-sends the preceding user turn - images included - and streams a fresh answer in its place. Useful when the model wanders off, hallucinates, or you just want a…"
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Thinking traces",
    "anchor": "thinking-traces",
    "body": "For reasoning-capable models, the chain-of-thought stream is rendered into a separate block above the answer, collapsed under a Thinking header (Thinking… while it streams). Expand it to audit how the model got there, and fold it away again when you only care about the final answer."
  },
  {
    "title": "Markdown rendering",
    "url": "pages/features/markdown.html",
    "heading": "Tool-call blocks",
    "anchor": "tool-calls",
    "body": "When the model calls tools - whether a built-in tool or one served by an MCP server - the calls collapse into a single header above the answer, styled like the thinking block: “Called tool tool” for one call, “Called N tools” for more, and “Calling tools…” while they run. Expand it to read each call’s name, arguments…"
  },
  {
    "title": "LaTeX math",
    "url": "pages/features/math.html",
    "heading": "LaTeX math",
    "anchor": "",
    "body": "Formulas in assistant replies are typeset with KaTeX - no setting to hunt for. Display and inline delimiters, ```math fences and the loose TeX symbols models sprinkle into prose all render as you would expect, while a $ that means money stays money."
  },
  {
    "title": "LaTeX math",
    "url": "pages/features/math.html",
    "heading": "What renders",
    "anchor": "delimiters",
    "body": "Display math - $$…$$ and \\[…\\]. A $$…$$ written on a single line is promoted to a centred display block. Inline math - \\(…\\) and $…$ (subject to the currency rule below). Math fences - a fenced code block tagged math renders as a display block instead of code. Other tags, such as ```latex, stay code. Loose symbols…"
  },
  {
    "title": "LaTeX math",
    "url": "pages/features/math.html",
    "heading": "Currency-safe $…$",
    "anchor": "currency",
    "body": "$ doubles as a currency sign, so a single-dollar span only typesets when it actually reads as math: the content must hug both delimiters, stay on one line and under 200 characters, not follow a word character and not be chased by a digit. In practice: Stays prose - “it costs $5 and $10”, “between $5-$10”, “US$5”.…"
  },
  {
    "title": "LaTeX math",
    "url": "pages/features/math.html",
    "heading": "Bundled, lazy and offline",
    "anchor": "offline",
    "body": "KaTeX ships inside the installer like the rest of the app - the script, its stylesheet and its fonts. Nothing is fetched over the network; the window’s content-security policy would block it if anything tried. What is deferred is only when the engine is read from disk and parsed: it loads the first time a reply in…"
  },
  {
    "title": "Code blocks & canvas",
    "url": "pages/features/code-canvas.html",
    "heading": "Code blocks & canvas",
    "anchor": "",
    "body": "Every fenced code block in an assistant reply is syntax-highlighted, line-numbered and comes with a small toolbar. For longer snippets, its Open button pops the block into the code canvas - a wider, easier-to-read panel alongside the conversation."
  },
  {
    "title": "Code blocks & canvas",
    "url": "pages/features/code-canvas.html",
    "heading": "Inline actions",
    "anchor": "inline-actions",
    "body": "Each code block has a header showing its language (or text when the model didn’t tag one) and three buttons: Open - pop the block out into the canvas panel (the tooltip reads Open in canvas ). Export - save to a file via the native save dialog. The default filename comes from the block’s language tag (snippet.ts…"
  },
  {
    "title": "Code blocks & canvas",
    "url": "pages/features/code-canvas.html",
    "heading": "The canvas panel",
    "anchor": "canvas-panel",
    "body": "The canvas opens in the right-hand slot of the window and holds one snippet at a time - opening another block replaces it. It shows: Header - a close button, the title (Code Canvas, Text canvas for plain text, or the file name when opened from an attachment) and a badge with the language. VS Code - write the snippet…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Slash commands",
    "anchor": "",
    "body": "Type / as the first character in the composer to open the command palette - a floating list that filters as you type. It is the fastest way to run chat actions, switch model or persona, manage memory, fetch a URL and more without lifting your hands off the keyboard."
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "The command palette",
    "anchor": "palette",
    "body": "The palette opens whenever the composer text starts with / and narrows to the commands whose names begin with what you type - /re leaves /rename, /regenerate and /remember. Each row shows the command, its arguments and a one-line description, under the same group headers /help uses (the headers appear once the list…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Where the results appear",
    "anchor": "results",
    "body": "A command that does something confirms with a short toast (Renamed chat, Switched model ). One that fails says why in a Command failed toast - for example No active chat. Start one with /new first. when a command needs an open chat and none is open. Commands that return a list - /list, /tools, /fetch, /stats, a bare…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "The commands",
    "anchor": "commands",
    "body": "Commands are grouped the way /help lists them. <arg> is required, [arg] optional. Most act on the chat that is open."
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Chat",
    "anchor": "cmd-chat",
    "body": "Command What it does /new Start a new chat. It lands in the active Space when there is one (the Space you’re viewing, or one picked with /space ). /clear Delete every message in the current chat, after a confirmation. A reply still streaming in that chat is stopped first. /rename <title> Rename the current chat. The…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Model & persona",
    "anchor": "cmd-model-persona",
    "body": "Command What it does /model <name> Switch the current chat’s model. An exact model id or display name wins; otherwise every model whose id or name contains what you typed matches, and several matches are listed so you can be more specific. /persona <name> Apply one of the built-in personas to the current chat…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Listings",
    "anchor": "cmd-listings",
    "body": "Command What it lists /list models Every model from both providers, with its provider. /list personas The built-in personas and what each does. /list spaces Your Spaces, marking the active one. /list snippets Your Snippets, with any pinned model and the start of the prompt. /list mcp Your MCP servers, enabled or…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Prompts",
    "anchor": "cmd-prompts",
    "body": "Command What it does /instructions <text> Set the current chat’s own instructions - the Additional instructions in the parameters panel. Line breaks are kept. /instructions clear Clear them. /instructions On its own, show the chat’s current instructions. A compaction summary stored with them is kept whichever form…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Memory & spaces",
    "anchor": "cmd-memory-spaces",
    "body": "The memory commands work on one list: the open chat’s Space; for a chat outside any Space, the active Space if there is one; otherwise your global memories. See Spaces and Memory. Command What it does /remember <fact> Save a fact to that list. Refused when the Space’s memory is switched off - or, outside a Space…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Tools & web",
    "anchor": "cmd-tools-web",
    "body": "Command What it does /tools List the tools exposed by your enabled MCP servers, server by server; a server that can’t be reached shows its error. Built-in tools aren’t listed. /web-fetch on|off Turn Web fetch on or off for every chat - the same switch as in Settings → Tools. /fetch <url> Fetch one page now and show…"
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "App",
    "anchor": "cmd-app",
    "body": "Command What it does /settings [tab] Open Settings, optionally on a tab: general, providers, features, tools, appearance, mcp, archive, data, security, updates or about. /help Open the Slash commands reference, with every command grouped as above."
  },
  {
    "title": "Slash commands",
    "url": "pages/features/slash-commands.html",
    "heading": "Recent commands",
    "anchor": "recent",
    "body": "Above those groups sits a Recent group: up to four of the commands you ran last that match what you’ve typed, hoisted out of their normal groups. Loach keeps the last six command names in its settings rather than per session, so the group is useful on the first / after a restart instead of only once you have already…"
  },
  {
    "title": "Context & compaction",
    "url": "pages/features/context-compaction.html",
    "heading": "Context & compaction",
    "anchor": "",
    "body": "A slim context-usage bar sits just below the message box and shows how much of the model’s context window the chat is using. When a conversation grows long, Compact context frees space without throwing away your scrollback."
  },
  {
    "title": "Context & compaction",
    "url": "pages/features/context-compaction.html",
    "heading": "The context-usage bar",
    "anchor": "usage-bar",
    "body": "The bar appears once a chat has messages. It reports used / total tokens and a percentage, and turns amber from 70% and red from 90%. Click it for a popover that breaks the estimate down: System prompt - this chat’s own instructions (or your global Custom instructions), including any compaction summary. Project…"
  },
  {
    "title": "Context & compaction",
    "url": "pages/features/context-compaction.html",
    "heading": "Compact context",
    "anchor": "compact",
    "body": "Press Compact context in the bar’s popover, or use the /compact slash command. Loach asks the chat’s own model to summarise the older turns as short bullet points - your goals, decisions, key facts and open threads - and keeps that summary with the chat’s instructions. The four most recent messages stay as they are…"
  },
  {
    "title": "Context & compaction",
    "url": "pages/features/context-compaction.html",
    "heading": "When you can compact",
    "anchor": "when-available",
    "body": "The popover button - enabled once the chat has at least six messages that haven’t been compacted yet and at least a quarter of the window is in use. /compact - only needs the six messages. Not while busy - a chat whose reply is streaming or waiting in the queue can’t be compacted, and only one chat compacts at a…"
  },
  {
    "title": "Context & compaction",
    "url": "pages/features/context-compaction.html",
    "heading": "Where the summary lives",
    "anchor": "summary-and-instructions",
    "body": "The summary is stored with the chat’s own instructions, so you can read - and edit - it in the Additional instructions box of the parameters panel, between [Loach: earlier conversation summary] markers. It doesn’t count as an instruction, though: it rides along with whichever instructions apply - a Space’s, the…"
  },
  {
    "title": "Pinned responses",
    "url": "pages/features/pinned-responses.html",
    "heading": "Pinned responses",
    "anchor": "",
    "body": "Long chats bury good answers. Pin any assistant reply and it lands in a Pinned bar under the chat header, one click away no matter how far the conversation has scrolled on."
  },
  {
    "title": "Pinned responses",
    "url": "pages/features/pinned-responses.html",
    "heading": "Pinning a reply",
    "anchor": "pinning",
    "body": "Open the … menu below any assistant message and pick Pin this response. A pin is a bookmark, not an edit - the message still reaches the model exactly like every other turn. Unpin this response lives in the same menu, and the bar disappears with the last pin. Replies imported with Hide from transcript can’t be…"
  },
  {
    "title": "Pinned responses",
    "url": "pages/features/pinned-responses.html",
    "heading": "The Pinned bar",
    "anchor": "pinned-bar",
    "body": "One chip per pin - each pinned reply shows as a one-line chip under the chat header, in conversation order; with many pins the row scrolls sideways. Click a chip to scroll that response back into view; the bubble flashes so you can spot it. Readable previews - chip text is the response with its markdown stripped, so…"
  },
  {
    "title": "Pinned responses",
    "url": "pages/features/pinned-responses.html",
    "heading": "Where pins live",
    "anchor": "persistence",
    "body": "Pins are stored with the chat, so they survive restarts and travel in data backups. Forking a chat copies the pins on the replies the fork includes. Regenerate replaces the last reply with a new one, so a pin on that reply goes with it. Pinning a chat (from the sidebar row, the chat header menu, or the /pin command)…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "Concurrency & queue",
    "anchor": "",
    "body": "Only one model generation runs at a time across all of your chats. Everything else waits in a FIFO queue - and you can always jump the line when you need to."
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "One generation at a time",
    "anchor": "one-at-a-time",
    "body": "Local models are heavy on hardware: most of the time only one prompt can stream at once without thrashing VRAM or pinning the CPU. Loach enforces this at the application level, regardless of which chats or providers are involved. The benefit is predictable performance - no two chats fighting for the same GPU - and a…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "The queue",
    "anchor": "the-queue",
    "body": "Send a prompt while another chat is busy and your request is parked. The chat’s row in the sidebar shows a spinner so you can see at a glance which chats are waiting, and the chat itself shows a Waiting for other chats to finish… card under your message. The queue is strictly first-in, first-out - earlier requests…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "Respond now",
    "anchor": "respond-now",
    "body": "The waiting card in a queued chat has two buttons: Respond now - stops whatever generation is currently running (keeping its partial output, see below), moves this chat to the front of the queue and starts it immediately. Cancel - takes this prompt out of the queue. Your message stays in the transcript, and no reply…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "Replies waiting for your approval",
    "anchor": "tool-approvals",
    "body": "When a reply pauses on a tool approval card - an MCP tool call, or a change to a file in the chat’s folder - it keeps its turn, so other chats queue behind it until you answer. If the card is in a chat you aren’t looking at, Loach shows a notice with an Open button, and a queued chat’s card reads Waiting for your…"
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "While Private Chat is open",
    "anchor": "private-chat",
    "body": "Opening Private Chat stops any regular reply that is streaming and holds the queue: nothing waiting in your regular chats starts until you close the overlay, and then the queue picks up where it left off."
  },
  {
    "title": "Concurrency & queue",
    "url": "pages/features/concurrency.html",
    "heading": "Cancelling and errors",
    "anchor": "cancel-and-error",
    "body": "Whether you stop a stream yourself (the send button becomes a stop button while streaming) or Respond now pre-empts it, whatever was written so far stays in the transcript. If the provider fails or drops the connection mid-reply, the partial output is kept too, and an italic ⚠ error line is added at the end so a…"
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
    "body": "Unlike regular chats, Private Chat does not create a chat row, message rows, metrics, or an attachment store. The transcript lives entirely in memory. The moment you close the overlay everything is gone - including the picked model, persona, tone, per-chat instructions, and parameters-panel state. There is nothing to…"
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Ollama only",
    "anchor": "ollama-only",
    "body": "The model picker inside Private Chat only lists local Ollama models, and starts on the Ollama model of your most recently active chat (or the first one installed). OpenAI-compatible providers are deliberately excluded - the data path for cloud providers crosses too many intermediaries (proxies, key vaults, hosted…"
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "MCP tools are blocked",
    "anchor": "mcp-blocked",
    "body": "Servers configured in Settings → MCP are not exposed to the model inside Private Chat. A tool call could side-channel the conversation out to a third party - that defeats the point. Built-in tools you have switched on still work: they run entirely on your machine, so they can’t leak the conversation. The file tools…"
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Opening and closing",
    "anchor": "opening-and-closing",
    "body": "Open Private Chat from the ghost icon in the title bar, or with the /private slash command. It opens as a dark-only overlay above whatever you were doing, with the cursor in its composer. The overlay can only be dismissed by the explicit X in its header - clicking outside, pressing Esc, or otherwise stray-clicking…"
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Attaching files",
    "anchor": "attachments",
    "body": "Attach files with the + button in the composer. The same 20 MB per-file cap and handling apply as in a regular chat (see Attachments ): text is added to your message, and images go to the model. Dropping files onto the overlay isn’t supported - the cursor shows the drop won’t be accepted - and a dropped file never…"
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Shaping layers",
    "anchor": "shaping-layers",
    "body": "Private Chat reuses the same prompt-shaping layers as a regular chat - just with a few deliberate omissions. Set them in the parameters panel (the sliders icon in the header); the active persona and tone show as chips above the composer, where you can remove them: Persona - any of the personas. Tone - pick any tone…"
  },
  {
    "title": "Private Chat",
    "url": "pages/features/private-chat.html",
    "heading": "Parameters panel",
    "anchor": "parameters",
    "body": "A trimmed-down version of the regular parameters panel: Thinking (for models that support it), Context Length, Low VRAM and a reset button, with no Advanced view. A note at the top says whether you are on the app defaults, the model’s Modelfile defaults or your own changes. The request carries exactly what the panel…"
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Spaces",
    "anchor": "",
    "body": "A Space is a long-lived workspace built around a project: a codebase, a research question, an ongoing piece of writing. It bundles instructions, reference sources, a memory and a default model. Every chat created inside a Space inherits that context automatically."
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "What a Space holds",
    "anchor": "what-a-space-holds",
    "body": "Instructions - a system prompt for every chat in the Space. When set, it replaces both your global custom instructions and the chat’s own instructions. Reference sources - text files, PDFs and Word documents are inlined into the system prompt of every chat in the Space; images ride along with each message so…"
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Creating and editing",
    "anchor": "lifecycle",
    "body": "Open the Spaces tab in the sidebar and click New space. Give it a name (up to 60 characters) and an optional description, then Save - Loach opens the new Space. The library shows every Space as a tile, most recently updated first, with its chat count, a New chat button and a … menu (Open / edit, Delete ). A Space’s…"
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Deleting a Space",
    "anchor": "deleting",
    "body": "Pick Delete space from the … menu (or Delete on its library tile). The Space’s instructions, sources and memory are deleted. Its chats are kept: they leave the Space and carry on as regular chats."
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Reference sources",
    "anchor": "sources",
    "body": "Add files on the Sources tab with Add source. Every source is sent with every message in the Space: Text and code files - inlined into the system prompt. PDFs and Word (.docx) documents - their text is extracted and inlined. A scanned PDF has no text to extract; add its pages as images instead. Images - PNG, JPEG…"
  },
  {
    "title": "Spaces",
    "url": "pages/features/spaces.html",
    "heading": "Space memory",
    "anchor": "memory",
    "body": "Each Space has its own memory, on by default for a new Space. After every finished reply in the Space, Loach asks the chat’s model to pick out lasting facts about you, saves them, and adds them to the system prompt of every chat in the Space as a --- Space memory --- list. A toast with an Undo button announces every…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "Memory",
    "anchor": "",
    "body": "Loach can remember lasting facts about you - your role, the projects you work on, how you like answers - and bring them into later chats. There are two kinds: Space memory, kept separately for each Space, and global memories, which follow you into every chat. Facts stay in Loach’s local database, and you can review…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "Space memory and global memories",
    "anchor": "two-kinds",
    "body": "Space memory Global memories Switched on with The switch on the Space’s Memory tab - on for every new Space Settings → Features → Global memories, or the Pick your defaults step of setup - off by default Learns from Chats inside that Space Chats outside any Space Sent with Chats inside that Space Every chat, inside…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "How facts are captured",
    "anchor": "how-facts-are-captured",
    "body": "After each finished reply, Loach makes a second, hidden call to the same provider and model you’re chatting with and asks it to pick out durable facts about you - things that would still be true, and worth knowing, in an unrelated chat a month from now. It runs in the background once the reply is done. If you send…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "Facts that change",
    "anchor": "facts-that-change",
    "body": "The extractor sees the facts it saved before, so when a turn shows one has changed - you moved city, reversed a preference, renamed a project - it rewrites that fact instead of adding a second one that contradicts it, and it removes a fact that no longer holds and has no replacement. Facts you added yourself, in the…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "Undo on every change",
    "anchor": "undo",
    "body": "Every change the extractor makes shows a toast with the fact and an Undo button, for about seven seconds: Saved to memory - a new fact. Undo deletes it. Updated memory - a rewritten fact. Undo restores the previous wording. Removed memory - a retired fact. Undo puts it back where it was, with its original date.…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "The memory editor",
    "anchor": "editor",
    "body": "A Space’s Memory tab and the Global memories dialog (Settings → Features → Manage global memories, which shows the count in brackets) use the same editor: Add a memory - type a fact and press Enter or click Add. Unavailable while that memory is switched off. Edit - click a fact’s text. Enter or clicking away saves…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "Saving a fact yourself: /remember",
    "anchor": "remember",
    "body": "Type /remember <fact> in the composer to save a fact directly. In a chat inside a Space it goes to that Space’s memory, and so it does while a Space is active - one you’re viewing or picked with /space; anywhere else it goes to global memories. It follows the same switches: if that Space’s memory is off, or global…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "What the model sees",
    "anchor": "what-the-model-sees",
    "body": "Facts go into the system prompt of each message as short bulleted lists: a --- Global memory --- block and, in a Space, a --- Space memory --- block, after your instructions. Each list sends the newest facts that fit within 60 facts and about 6,000 characters (roughly 1,500 tokens), so a long list can’t crowd a small…"
  },
  {
    "title": "Memory",
    "url": "pages/features/memory.html",
    "heading": "Privacy",
    "anchor": "privacy",
    "body": "Stored locally - facts live in Loach’s local database. They’re included in a backup export and removed by Settings → Data → Erase… (Remove my data or Factory reset ); see Data management. Deleting a Space deletes its memory. Cloud providers - with an OpenAI-compatible provider, the extraction call (your message, the…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Snippets",
    "anchor": "",
    "body": "A Snippet is a saved prompt with an optional pinned provider and model. Snippets live in their own sidebar tab and exist for the kind of prompt you reach for over and over - “summarise this in three bullets”, “review this diff for security issues”, “translate to formal Polish”."
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Creating",
    "anchor": "creating",
    "body": "Open the Snippets tab in the sidebar and click New snippet. Give it a title (up to 80 characters) and the prompt body. Optionally pick a default model from the model menu so Run always starts a chat there; Clear removes the pin. Pinning is a nice fit for prompts that genuinely need a particular model - a…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Running",
    "anchor": "running",
    "body": "Hit Run on a Snippet to open a fresh chat (outside any Space, with the pinned model if there is one) and put the prompt in the composer. You can edit it before sending - Snippets are a starting point, not a one-shot button. There are three ways to run one: From the library - the Run button on a tile, or Run in its ……"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Save a prompt you already sent",
    "anchor": "bookmark-replies",
    "body": "Each message you sent has a … menu just below it (hover the message, or Tab to it). Pick Save as Snippet and Loach opens the editor with that text filled in, ready for a title. The action is on your own messages only - not on assistant replies, and not in the right-click menu."
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "The library",
    "anchor": "library",
    "body": "The Snippets tab shows a tile grid, most recently created or edited first. Each tile shows the start of the prompt, the pinned model (or Default model) and when it was last changed. Click a tile to edit it; its … menu has Run, Edit and Delete. Deleting asks for confirmation and can’t be undone. The library has no…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Snippet variables",
    "anchor": "variables",
    "body": "Snippet bodies can contain {{PLACEHOLDER}} variables that get filled in when the snippet runs. A placeholder name is uppercase letters, digits and underscores inside double braces; anything else in braces, such as {{name}}, is left as typed. Static variables - reusable values you define once in the Variables panel…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Defining static variables",
    "anchor": "static-variables",
    "body": "In the Variables panel, click New and fill in a Key, a Value and an optional Description. Keys are converted to uppercase as you type; they can use letters, digits and underscores, can’t start with a digit, and can be up to 64 characters. The built-in names (USER_NAME and the CURRENT_* ones) are reserved. Use the…"
  },
  {
    "title": "Snippets",
    "url": "pages/features/snippets.html",
    "heading": "Filling in placeholders",
    "anchor": "fill-in",
    "body": "When a snippet still has placeholders after the static pass, the Fill in snippet variables dialog lists one field per placeholder, in the order they appear. Every field needs a value. Enter moves to the next field and, on the last one, runs the snippet - as does Run snippet. Cancel leaves the composer as it was."
  },
  {
    "title": "Chat folders & labels",
    "url": "pages/features/folders-labels.html",
    "heading": "Chat folders & labels",
    "anchor": "",
    "body": "Two lightweight ways to keep a busy sidebar readable without the ceremony of a Space: folders group related chats under a name, and colour labels tag a chat with a dot that follows it everywhere it is listed."
  },
  {
    "title": "Chat folders & labels",
    "url": "pages/features/folders-labels.html",
    "heading": "How the sidebar is organised",
    "anchor": "sidebar-groups",
    "body": "Chats are grouped by recency - Pinned, Today, Yesterday, This week, Older - with a Folders section between Pinned and the date groups whenever a folder exists. Each row can carry a few markers: Icons - a pin on pinned chats, a fork on forked chats, and the Spaces icon on chats that belong to a Space (shown only when…"
  },
  {
    "title": "Chat folders & labels",
    "url": "pages/features/folders-labels.html",
    "heading": "Folders",
    "anchor": "folders",
    "body": "Drag one chat row onto another. Loach asks for a folder name and files both chats into it; if the chat you drop onto is already in a folder, the dragged chat simply joins that folder. Folders are flat - they never nest. A new folder opens expanded, each folder shows how many chats it holds, and Loach remembers which…"
  },
  {
    "title": "Chat folders & labels",
    "url": "pages/features/folders-labels.html",
    "heading": "Colour labels",
    "anchor": "labels",
    "body": "Tag any chat Red, Amber, Green, Blue, Purple or Pink from the Label submenu of any chat menu - the sidebar row, the chat header or the Space view. The colour renders as a dot at the start of the row in the sidebar and in the Space view. No label clears it. Labelling a chat doesn’t move it in the list, and a fork…"
  },
  {
    "title": "Chat folders & labels",
    "url": "pages/features/folders-labels.html",
    "heading": "The sidebar on narrow windows",
    "anchor": "auto-collapse",
    "body": "Below 1080 px the sidebar gets out of the way on its own: opening a right-hand panel (the code canvas or the parameters panel) folds it to its icon rail so the transcript keeps a usable width, and restores it when the right slot empties again. A manual toggle (Ctrl + Shift + S, or the sidebar button in the title bar)…"
  },
  {
    "title": "Chat archive",
    "url": "pages/features/chat-archive.html",
    "heading": "Chat archive",
    "anchor": "",
    "body": "Some chats you want to keep but stop seeing every day. The archive moves them out of the sidebar without deleting anything, and you can pull them back at any time."
  },
  {
    "title": "Chat archive",
    "url": "pages/features/chat-archive.html",
    "heading": "Archiving a chat",
    "anchor": "archiving",
    "body": "Open the per-row menu in the sidebar (or right-click the row) and pick Move to archive. The same option lives in the chat’s header menu and in a Space’s chat list, and the /archive slash command does the same. The chat disappears from the main list immediately. Archiving also unpins the chat, stops a reply it is…"
  },
  {
    "title": "Chat archive",
    "url": "pages/features/chat-archive.html",
    "heading": "The archive view",
    "anchor": "archive-view",
    "body": "The archive lives at Settings → Archive. A quiet Archived row with a count also appears at the bottom of the sidebar whenever archived chats exist, and opens that tab, so nothing looks gone for good. The list shows the most recently archived chats first, each with the date it was archived and a Space tag for chats…"
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "Search",
    "anchor": "",
    "body": "Loach has two complementary search surfaces: a global palette for jumping anywhere in the app - including inside message content - and a browser-style finder for the chat you are currently looking at."
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "The global palette",
    "anchor": "palette",
    "body": "Press Ctrl + K (or click the search pill in the title bar) to open the palette. It cross-searches: Chats - by title. Messages - the content of your transcripts (see below). Spaces - by name and description. Snippets - by title and body. An empty query shows suggestions: the chats you opened most recently first, then…"
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "Message search",
    "anchor": "messages",
    "body": "Message search looks inside transcripts, not just titles. Hits carry a MESSAGE badge, the chat’s title and a one-line excerpt that opens just before the match, newest first. They sort below title matches - a chat whose title matches is the stronger signal - but transcript hits keep a reserved block at the bottom of…"
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "Scoping with in:",
    "anchor": "scoping",
    "body": "A dropdown beside the input narrows the search to one kind: everywhere (the default), chats, messages, spaces or snippets. It works by writing an in:<scope> token into the query itself - the token is the scope, so you can type in:messages borrow by hand, or notes in:spaces with the token last, and the dropdown label…"
  },
  {
    "title": "Search",
    "url": "pages/features/search.html",
    "heading": "Find within a chat",
    "anchor": "in-chat",
    "body": "Press Ctrl + F in a chat, or pick Search in chat from the chat header’s … menu, to open the Find in this chat… bar at the top right. It works like browser find: type to search (case-insensitive), every occurrence is highlighted inline, and the current match is scrolled into view with a stronger highlight. Stepping…"
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Import and export context",
    "anchor": "",
    "body": "Chats are not locked into Loach. You can copy a conversation out as Markdown, paste context into any chat, and fork a chat to branch it. For a full backup of everything, see Data management."
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Export context",
    "anchor": "export",
    "body": "From the chat header’s … menu, pick Export context (or type /export ). A dialog shows the conversation as Markdown - the chat’s title, provider and model, its own instructions, then a ## You, ## Assistant or ## System section per message - with a Copy button. Nothing is written to disk: paste it into a notes app, a…"
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Import context",
    "anchor": "import",
    "body": "From the same menu, pick Import context and paste exported Markdown, JSON or just plain text. Loach detects the format as you paste and shows how many messages it will add before you click Import: Markdown - ## You, ## Assistant and ## System sections, the shape Export context produces. Anything above the first…"
  },
  {
    "title": "Import and export context",
    "url": "pages/features/import-export.html",
    "heading": "Fork a chat",
    "anchor": "fork",
    "body": "Fork this chat clones a conversation into a brand-new chat - same title, model, Space, sidebar folder, working folder, instructions and parameters - so you can branch a tangent without disturbing the original. Fork it from the chat header’s … menu, with Fork from here in an assistant reply’s … menu (which copies the…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Attachments",
    "anchor": "",
    "body": "Drop files onto the window, paste them, or pick them from the + menu next to the message box. Loach reads each file on your machine and adds its contents to your message - there is no separate upload step, and nothing leaves your machine unless you are using a cloud provider."
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Adding files",
    "anchor": "adding-files",
    "body": "+ menu - Add files opens the native file picker; pick as many files as you like. Ctrl + U opens the same picker. Drag and drop - drop files anywhere in the window while a message box is on screen. The box reads Drop files here to attach while you drag. Paste - Ctrl + V in the message box attaches any files on the…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Supported file types",
    "anchor": "supported-types",
    "body": "Loach sorts every file into one of four kinds: Images - PNG, JPEG, WEBP and GIF. Sent to the model as images alongside your text, so they need a vision-capable model. Text and code - about seventy recognised extensions (Python, TypeScript, Rust, Go, JSON, YAML, Markdown, CSV, SQL, shell scripts, Dockerfile, Makefile…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "How attachments enter the prompt",
    "anchor": "how-it-works",
    "body": "When you send, your typed prompt comes first, followed by one block per text file or document, in the order you added them. Each block opens with a header naming the file (“Attached file”, “Attached PDF” or “Attached Word document”), so the model knows what it is looking at. Pages pulled in by web fetch come after…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Caps and truncation",
    "anchor": "caps-and-truncation",
    "body": "To keep the prompt manageable, Loach applies three limits: 20 MB per file - a bigger file is refused, with “name is larger than 20 MB.” under the message box. 200,000 characters per file - a longer text file, PDF or DOCX keeps only its first 200,000 characters. Its chip in the message box gets an amber truncated…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Files Loach cannot decode",
    "anchor": "unknown-formats",
    "body": "Legacy .doc files, archives, binaries, unsupported image formats and anything else Loach does not parse still attach. The file is kept with the message and the model is told its name, but none of its content. The model can still acknowledge that “you attached report.zip” and ask for a usable version, and you can open…"
  },
  {
    "title": "Attachments",
    "url": "pages/features/attachments.html",
    "heading": "Previews",
    "anchor": "previews",
    "body": "Click a chip - in the message box or on a sent message - to preview it without leaving the chat. This covers files you attached, images returned by MCP tools and PDFs produced by the built-in pdf tool alike. Loach picks the viewer based on what the file is: Images - open in a lightbox with a Save button. Click the…"
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "Voice dictation",
    "anchor": "",
    "body": "A mic button in the composer turns speech into text in real time. It uses the speech recognition built into the system web view (the Web Speech API), so there is no extra model to install - but it also means the platform itself decides what happens to the audio."
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "How it works",
    "anchor": "how-it-works",
    "body": "Click the mic (Voice dictation) next to the send button to start. While it listens, the button turns red and pulses. Whatever is already in the message box stays, and what you say is appended after it: interim guesses appear as you speak and settle into final text as the engine commits each phrase. Click the mic…"
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "When dictation fails",
    "anchor": "errors",
    "body": "Problems show as a short line under the message box: “Microphone access was blocked. Allow it in your OS sound settings to dictate.” - the microphone permission was denied, or the platform’s speech service refused the request. Check that apps are allowed to use the microphone in your OS privacy settings. “Dictation…"
  },
  {
    "title": "Voice dictation",
    "url": "pages/features/voice-dictation.html",
    "heading": "Where it shows up",
    "anchor": "availability",
    "body": "The mic button only appears when the system web view exposes the Web Speech API. Where it doesn’t, the button is hidden rather than showing a button that does nothing. In practice: Windows - WebView2 exposes the API, so the button shows. Linux - usually hidden: most WebKitGTK builds don’t provide the API. macOS…"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Web fetch",
    "anchor": "",
    "body": "Drop an http:// or https:// URL into a prompt and Loach downloads the page, strips the markup to readable text and appends it to your message as a fenced block. The model sees the contents of the page alongside your question, no separate browser extension needed."
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Off by default",
    "anchor": "opt-in",
    "body": "Loach is offline-first. Web fetch is the only switch in Settings → Tools that reaches out to the network on your behalf, so it ships off. Turn it on there when you want it - or type /web-fetch on (and /web-fetch off) in the composer - or leave it off if you would rather everything stay strictly local. The onboarding…"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "How it works",
    "anchor": "how-it-works",
    "body": "When you send a message, Loach scans the text you typed for URLs. Only those are fetched: the model can’t ask Loach to fetch a page on its own. For each URL it finds, Loach: Downloads the page, deduping repeated links and fetching several URLs in parallel. Sanitises the HTML into readable plain text, keeping the page…"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Limits",
    "anchor": "limits",
    "body": "Up to 5 URLs per message - duplicates are collapsed, anything beyond the cap is skipped. 30 s per URL in total, redirects included, with a 10 s connect timeout. 5 MB download cap per URL - a larger page is cut at the cap and marked truncated. ~12,000 characters of extracted text per URL - the leading portion of long…"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Safety guards",
    "anchor": "safety",
    "body": "Schemes - only http and https. Private-IP guard - localhost and any URL whose resolved address (IPv4 or IPv6) is on loopback, a private network range, link-local, carrier-grade NAT (100.64.0.0/10, which Tailscale uses), IPv6 unique-local (fc00::/7) or another reserved block is refused - even when a public-looking…"
  },
  {
    "title": "Web fetch",
    "url": "pages/features/web-fetch.html",
    "heading": "Shown on the reply",
    "anchor": "on-the-reply",
    "body": "Each URL Loach fetched for a turn appears as a web_fetch entry in the collapsible tool-call block above the assistant’s answer, so you can see exactly which pages fed into it. Expand an entry to see the page title and size, the final URL after redirects, whether Loach truncated it - or, for a failed fetch, the…"
  },
  {
    "title": "Share a message",
    "url": "pages/features/share-message.html",
    "heading": "Share a message",
    "anchor": "",
    "body": "Share in any message’s … menu - your prompts and the model’s replies alike - opens a dialog with two tabs: the message as text, or the message drawn as a chat-bubble image. Loach uploads nothing itself: sharing hands text to your browser or leaves an image on your clipboard."
  },
  {
    "title": "Share a message",
    "url": "pages/features/share-message.html",
    "heading": "As text",
    "anchor": "as-text",
    "body": "The message as written, markdown and all. Copy puts it on the clipboard, or hand it to Facebook, X, Reddit or LinkedIn: Loach opens that network’s composer in your browser with the text pre-filled, trimmed to the length each one accepts (about 270 characters on X). The clipboard always gets the full text. Facebook…"
  },
  {
    "title": "Share a message",
    "url": "pages/features/share-message.html",
    "heading": "As image",
    "anchor": "as-image",
    "body": "The same message drawn as a chat-bubble PNG that follows your current light or dark theme, captioned Prompt or AI Response and footed with “Shared from Loach”. The text is drawn as written - markdown isn’t rendered - and a long message is cut off after 48 lines. Copy puts the image on the clipboard; Save writes the…"
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Temporal awareness",
    "anchor": "",
    "body": "Out of the box, most models don’t know what day it is. Temporal awareness fixes that by prepending a one-line date, weekday and timezone note to every system prompt - only when the prompt doesn’t already pull those values in itself."
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Enabling",
    "anchor": "enabling",
    "body": "Temporal awareness is on by default, and setup’s Pick your defaults step offers it too. Switch it with Settings → Features → Temporal awareness. The change applies to every chat, new or existing, from its next message. Below the switch, an expandable “Template variables” cheat sheet lists the five {{CURRENT_*}}…"
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "How it decides to fire",
    "anchor": "how-it-fires",
    "body": "Before each message, Loach checks the system prompt it has built - your instructions, plus any memory and Space sources - for the {{CURRENT_*}} placeholders: {{CURRENT_DATE}}, {{CURRENT_TIME}}, {{CURRENT_WEEKDAY}}, {{CURRENT_DATETIME}}, {{CURRENT_TIMEZONE}} If any of them is present, you’ve asked for the values…"
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Why the time isn’t included",
    "anchor": "no-time",
    "body": "The automatic line carries the date, weekday and timezone, but not the time of day. It sits at the very start of the system prompt, and Ollama reuses the start of a prompt it has already processed to answer follow-ups faster. A clock that changed every minute would break that on almost every message and force the…"
  },
  {
    "title": "Temporal awareness",
    "url": "pages/features/temporal-awareness.html",
    "heading": "Why it matters",
    "anchor": "why",
    "body": "Many factual queries depend on “today”: meeting scheduling, deadlines, age calculations, news cut-offs. Without temporal awareness the model relies on whatever date it was trained around, which is almost certainly wrong by the time you are talking to it. Tip If you only want the date in some chats (or formatted…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "MCP support",
    "anchor": "",
    "body": "Loach speaks the Model Context Protocol (MCP) over two transports: Streamable HTTP for hosted servers and gateways, and local process (stdio) for the many servers published as a command to run. Add servers in Settings → MCP and their tools become available to the model during a chat - and by default, every call waits…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "What is MCP?",
    "anchor": "what-is-mcp",
    "body": "MCP is an open protocol that lets models call structured tools served by a separate process. Where Web fetch just hands the model a page of text, an MCP server can expose typed tools (“list files in this repo”, “search this database”, “send this email”) that the model calls with arguments and gets typed results back.…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Adding a server",
    "anchor": "registering",
    "body": "Open Settings → MCP and click Add server. Every server has: Display name - the label shown in menus and in the approval card. One line, at most 100 characters. Transport - Streamable HTTP or Local process (stdio); the fields below it change to match. Ask before each tool call - the per-call approval switch, on by…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Streamable HTTP",
    "anchor": "http",
    "body": "URL - the server’s http(s)://… endpoint, where requests are POSTed. localhost and private LAN addresses are accepted, since self-hosted servers commonly live there; only link-local (cloud-metadata) addresses are refused. The legacy two-endpoint SSE transport is not supported. Headers - optional, one Name: value per…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Local process (stdio)",
    "anchor": "stdio",
    "body": "Command - a program on your PATH (npx, uvx, node) or a full path to one. Arguments - one per line, with no shell quoting: each line is passed as one argument, spaces included; only the ends of a line are trimmed. Environment variables - optional NAME=value lines layered over Loach’s own environment. This is where…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Consent before a program runs",
    "anchor": "consent",
    "body": "A stdio server runs a program on your computer with your permissions, so Loach asks first in a native system dialog, “Run MCP server …?”. It appears when you test a stdio server, save a new one switched on, change the command, arguments or environment of an enabled one, or turn a disabled one on. Saving a server…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Approving tool calls",
    "anchor": "approvals",
    "body": "With Ask before each tool call on, every call from that server pauses the reply and shows a card - “Allow server to run tool ?” - with the arguments the model wants to pass, and three answers: Allow once - run it this time. Always allow tool - run it, and stop asking for this tool on this server. The choice is saved…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "In a chat",
    "anchor": "in-chat",
    "body": "The calls render in the collapsible “Called N tools” block above the answer - expand it to inspect each call’s name, arguments and result. The same block also covers built-in tools. When a tool returns an image, Loach shows it as an inline attachment on the reply rather than dropping it; the model itself is only told…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Safety guards",
    "anchor": "safety",
    "body": "HTTP - URLs are validated and the resolved addresses pinned for the connection, header names and values are checked for disallowed characters and size, responses are capped at 4 MiB and each request has a 30-second timeout, so a hung or hostile server can’t freeze the chat or exhaust the app. stdio - startup gets 60…"
  },
  {
    "title": "MCP support",
    "url": "pages/features/mcp.html",
    "heading": "Backups and imports",
    "anchor": "backups",
    "body": "Headers and environment variables hold API keys, so they are left out of backups. Arguments are exported as typed, except a password in a URL (postgresql://user:…@host) and the value of a flag such as --token or --api-key=…, which read REDACTED. An environment variable is still the better place for a secret. A backup…"
  },
  {
    "title": "Built-in tools",
    "url": "pages/features/built-in-tools.html",
    "heading": "Built-in tools",
    "anchor": "",
    "body": "A set of small, local utilities the model can call mid-answer through the same tool-call loop as MCP. They run entirely in Rust on your machine - no network, and apart from the file tools, nothing that touches your files - so they also work inside Private Chat."
  },
  {
    "title": "Built-in tools",
    "url": "pages/features/built-in-tools.html",
    "heading": "How they work",
    "anchor": "how-it-works",
    "body": "Each tool has its own switch in Settings → Tools, and every one is off by default - turn on only what you want a given model to reach for. The onboarding wizard ’s Tools step proposes a Recommended set (everything except the four developer-only tools - Hash, UUID, Base64 and IP / CIDR - and Workspace files, which…"
  },
  {
    "title": "Built-in tools",
    "url": "pages/features/built-in-tools.html",
    "heading": "The tools",
    "anchor": "the-tools",
    "body": "Each entry gives the switch’s name in Settings → Tools, then the tool name the model sees. Calculator (calculate) - evaluate arithmetic, trigonometry (in radians), functions such as sqrt, ln, log10 and round, and the constants pi and e. Operators group the way programming languages do (100 / 5 * 2 is 40, 2^3^2 is…"
  },
  {
    "title": "Built-in tools",
    "url": "pages/features/built-in-tools.html",
    "heading": "PDF generation",
    "anchor": "pdf",
    "body": "The pdf tool turns a structured spec - headings, paragraphs, bulleted and numbered lists, simple tables, horizontal rules and page breaks - into a real A4 PDF. The result lands in the chat as a previewable, savable attachment, so you can ask the model to draft a document and pull it straight out. The bundled font…"
  },
  {
    "title": "Built-in tools",
    "url": "pages/features/built-in-tools.html",
    "heading": "Limits",
    "anchor": "limits",
    "body": "20 seconds per call - a built-in tool that runs longer is stopped and the model is told to try smaller input. The file tools that change files are the exception: they always run to the end. 32 KB back to the model - a longer result is cut, with a note telling the model so; the tool-call block still shows the whole…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "Work in folders",
    "anchor": "",
    "body": "Give a chat a folder and the model can work in it the way a coding assistant does - list, find, read and search the files, and, once you approve each change, write, edit, move and delete them. Everything stays inside that folder, and there is no shell."
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "Adding a folder",
    "anchor": "adding-a-folder",
    "body": "Click the + button next to the message box and choose Add directory, then pick a folder in the system dialog. The same menu’s Add files is something else: it attaches file contents to one message (see Attachments ), while a directory gives the model tools over a folder for the rest of the chat. Start the chat first…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "The “Working in” notice",
    "anchor": "working-in",
    "body": "For the rest of the chat, the message box reads Working in folder just above where you type, with the full path in its tooltip. Click the folder’s name to open it in your file manager, or remove it with the × beside it; the + menu now offers Change directory. While a reply is running in the chat, the folder can’t be…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "What the model can do",
    "anchor": "the-tools",
    "body": "Eight tools appear in the model’s catalogue only while the chat has a folder; without one, the model never sees them. All paths are relative to the folder. list_directory - a tree of a directory, two levels deep by default and at most eight. Dependency and build directories (node_modules, target, dist, .git, .venv…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "Approving changes",
    "anchor": "approvals",
    "body": "Listing, finding, reading and searching never ask. The four tools that change files - write_file, edit_file, move_file and delete_file - pause the reply and ask first, unless you’ve allowed that tool for the chat. The card asks “Allow the model to …?” with the file’s path inside the folder written out in full, and…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "How far “for this chat” reaches",
    "anchor": "allow-for-this-chat",
    "body": "The answer is kept in memory, never saved, and is tied to the folder it was given for. It ends when you change or remove the chat’s folder, delete the chat, switch Workspace files off, or quit Loach. It covers only Loach’s own tool - never an MCP server’s tool of the same name - and never anything inside a .git…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "Staying inside the folder",
    "anchor": "sandbox",
    "body": "Relative paths only - absolute paths and .. are refused up front. Links are checked - every path is resolved through symbolic links and checked against the folder again before it is used, so a link pointing elsewhere is refused. So is a link whose target doesn’t exist, since writing through it would create that…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "Line endings and encodings",
    "anchor": "file-formats",
    "body": "Line endings are preserved: editing or overwriting a CRLF file keeps it CRLF. So is the text encoding. Files that aren’t UTF-8 - Windows-1250 or another legacy code page, or UTF-16 with a byte-order mark (what PowerShell 5.1 writes by default) - are read, searched and edited in their own encoding and written back in…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "Project instructions (LOACHFILE.md)",
    "anchor": "loachfile",
    "body": "If the folder has a LOACHFILE.md at its root, its contents are added to the system prompt on every turn - the same idea as a CLAUDE.md or AGENTS.md: the project’s own notes on how to work in it, such as how to run the tests, what not to touch and the house style. A sample is available to start from. Read fresh each…"
  },
  {
    "title": "Work in folders",
    "url": "pages/features/work-in-folders.html",
    "heading": "Privacy and Private Chat",
    "anchor": "privacy",
    "body": "The tools run inside Loach, but what they read becomes part of the conversation: with a cloud provider, those file contents are sent to it like any other message. The model is also told the folder’s full path, so it knows which project it is working in. Private Chat never gets a folder or the file tools. Choosing a…"
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
    "body": "Use most recent (default) - pick up wherever you left off. New chats open in the last model you picked from a chat’s model dropdown (or the one you chose during setup). Pin to provider - Use last Ollama model or Use last OpenAI model: the model of your most recently active chat on that provider. Useful if you bounce…"
  },
  {
    "title": "Default model selector",
    "url": "pages/features/default-model.html",
    "heading": "What can override it",
    "anchor": "overrides",
    "body": "The global default is the last word for plain new chats. But: Chats started inside a Space use the Space’s pinned model when one is set. Chats started by Run on a Snippet - from the Snippets library or the search palette - use that Snippet’s pinned model when set. New chat on a model’s tile or in the Models editor…"
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Model preloading",
    "anchor": "",
    "body": "When Preload on startup is on, Loach sends an empty chat to your default model as the app launches - warming it into VRAM so the first real prompt of the session streams without the usual cold-start pause."
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Enabling",
    "anchor": "enabling",
    "body": "Turn on Preload on startup in Settings → General, right under the Default model picker. It is off by default, and it is Ollama-only - hosted providers do not have a meaningful concept of warm vs cold from your side. While the default resolves to an OpenAI-compatible model (or to no model yet), the switch is greyed…"
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "The trade-off",
    "anchor": "trade-off",
    "body": "Preloading pins VRAM at launch even if you only opened Loach to re-read an old conversation. That is why it ships off: many users only want VRAM consumed when they are about to actually chat. Turn it on if you launch Loach with intent - you know the first thing you do is going to be a fresh prompt."
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Which model gets warmed",
    "anchor": "how-it-resolves",
    "body": "Preload resolves through the same logic as Default model: If you pinned a specific model, that one. If you pinned to a provider, the model of your most recently active chat on that provider. Otherwise, your most recent (provider, model) pair. Only an Ollama result is warmed - if the default lands on an…"
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "When it runs",
    "anchor": "when-it-runs",
    "body": "At launch - warming starts while the window is still loading, and is repeated once your settings and chats have loaded. With Auto-launch Ollama on, Loach waits for the server it started before warming. After unlocking - with an app lock set, nothing is warmed until you unlock. Sized like your first chat - the model…"
  },
  {
    "title": "Model preloading",
    "url": "pages/features/model-preloading.html",
    "heading": "Keeping it loaded",
    "anchor": "keep-alive",
    "body": "Preloading only helps the first prompt. Whether the model stays resident afterwards is Ollama’s keep-alive: Settings → Features → Keep model loaded sets it to 5 min, 30 min, 1 hour or Always. Loach sends that value with every request - the preload included, so the warmed model doesn’t drop out before you type - and a…"
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Low VRAM mode",
    "anchor": "",
    "body": "Low VRAM mode sends Ollama’s low_vram flag with every request, asking the daemon for smaller batches and a leaner KV cache. It trades throughput for the ability to run on hardware that would otherwise OOM."
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Where to set it",
    "anchor": "where",
    "body": "There are two places this lives: Per chat - the Low VRAM toggle in the Performance section of the parameters panel, in both the Simple and Advanced views. Affects just that conversation. Private Chat ’s panel has the same toggle. Globally - Settings → Features → Low VRAM mode, also offered in setup’s Pick your…"
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Which one wins",
    "anchor": "precedence",
    "body": "The global setting overrides the per-chat toggle. When the global pin is on, the per-chat toggle shows as on and disabled, with a pointer back to Settings → Features so you understand why it cannot be flipped from the panel. Turn the global setting off and you regain per-chat control - the pin is never written into a…"
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Ollama only",
    "anchor": "ollama-only",
    "body": "The flag is meaningful only for the local Ollama backend. Loach does not send it to OpenAI-compatible endpoints - hosted services have no concept of your VRAM budget - and in a chat on one, the toggle is disabled with “Ignored by OpenAI providers.”"
  },
  {
    "title": "Low VRAM mode",
    "url": "pages/features/low-vram.html",
    "heading": "Still running out of memory",
    "anchor": "still-oom",
    "body": "Low VRAM mode is one lever among several. A smaller Context Length, fewer GPU Layers (Advanced view) or a smaller quantization usually save more - see Performance & VRAM."
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "App lock",
    "anchor": "",
    "body": "App lock is an optional credential gate that runs before any chat data loads, with opt-in triggers that re-engage it mid-session. Configure it in Settings → Security."
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "PIN, password, or both",
    "anchor": "modes",
    "body": "Click Set up app lock and pick a Lock method: PIN - 4, 6 or 8 digits. Quick to type on a numeric pad. Password - at least 8 characters. PIN + password - both required. The PIN is asked first because it is faster to type. You type each new credential twice, then click Enable lock. An optional Hint of up to 120…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "How credentials are stored",
    "anchor": "storage",
    "body": "Loach never writes the PIN or password to disk in plaintext, and never stores them in the SQLite database. The lock blob - Argon2id hashes with a random salt, plus your hint - lives in the OS credential manager. On Windows that is Credential Manager; on Linux it is the Secret Service via your desktop’s keyring; on…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "The lock screen",
    "anchor": "lock-screen",
    "body": "On launch, the Loach is locked screen fills the window, and your chats aren’t loaded until you authenticate. The title bar’s window controls keep working, but search, the sidebar toggle and the Private Chat button are hidden. When both a PIN and a password are required, the PIN field comes first and focus jumps to…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "Rate limiting",
    "anchor": "rate-limit",
    "body": "After 5 consecutive wrong attempts, every credential check is refused for a cool-off window that starts at 30 seconds and doubles with each further failure (60 s, 2 min, …), capped at 2 hours. The lock screen shows Too many failed attempts. Try again in N seconds. The counter is shared, so wrong credentials in a…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "Auto-lock",
    "anchor": "auto-lock",
    "body": "On its own the lock only gates launch: clear the lock screen once and you stay unlocked until you quit. That covers a stolen laptop but not the more common risk - walking away from an unlocked machine. Two opt-in triggers close that gap, both in the Auto-lock card that appears in Settings → Security once a lock is…"
  },
  {
    "title": "App lock",
    "url": "pages/features/app-lock.html",
    "heading": "Re-authentication for destructive actions",
    "anchor": "reauth",
    "body": "Even after you unlock the app, changing or removing the lock and the destructive Data management actions (Import data, Remove my data and Factory reset) ask for your current credentials again. They are checked in the backend before anything happens, so a compromised interface cannot silently disable the gate or…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Data management",
    "anchor": "",
    "body": "Settings → Data is where backups, restores and cleanups live. Loach stores everything local-first, so you are the one who decides where your data goes - and you can take it with you."
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Storage breakdown",
    "anchor": "storage",
    "body": "A read-only breakdown sits above the controls, so “how big is this?” is answered before you reach for a destructive one: Database - total bytes on disk (the SQLite file plus its write-ahead log and shared-memory files) and its path, itemised into Chats (message text, with message and chat counts), Attachments…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Export data",
    "anchor": "export",
    "body": "Export data writes a single JSON backup - loach-export-YYYY-MM-DD.json by default - with every chat (archived ones included), message, folder, Space with its sources and memories, global memory, Snippet, snippet variable and saved fill-in, MCP server and setting. The native save dialog opens and the app’s backend…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Import data",
    "anchor": "import",
    "body": "Import data restores a file made by Export data. It replaces everything in the database - chats, Spaces, Snippets, MCP servers and settings - so Loach first shows a confirmation, asks for your current credentials if app lock is on, and only then opens the file picker. Your stored OpenAI-compatible API key and the app…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Archive all chats",
    "anchor": "archive-all",
    "body": "Moves every live chat to the archive after a confirmation, unpinning them on the way. Nothing is deleted - unarchive any of them later from Settings → Archive."
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Remove my data",
    "anchor": "wipe",
    "body": "In the Erase & Reset card, click Erase… and pick Remove my data. It deletes all chats and folders, Spaces (with their sources and memories), global memories, Snippets, snippet variables and saved fill-ins, and MCP servers. It keeps your settings, the stored OpenAI-compatible API key and the app lock, so the app…"
  },
  {
    "title": "Data management",
    "url": "pages/features/data-management.html",
    "heading": "Factory reset",
    "anchor": "factory-reset",
    "body": "The other option in the same dialog: everything Remove my data deletes, plus all settings, plus the OpenAI-compatible API key and the app lock from the credential store. Loach reloads straight into onboarding, like a fresh install. Irreversible. Use this when handing the machine to someone else, or as the last step…"
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Themes",
    "anchor": "",
    "body": "Loach ships two themes, three colour modes and three font sizes, all in Settings → Appearance. Everything updates instantly - no reload - and your choice is remembered across launches. Out of the box you get Aurora in dark mode at the Normal font size."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Themes",
    "anchor": "themes",
    "body": "Each Theme tile shows a miniature of the app in your current colour mode. Solid - calm flat background, azure accent. The pick if you want minimal visual noise. Aurora - the default: a soft, blurred mesh gradient under translucent glass panels, with a warm orange accent. The right pick if you like a bit more…"
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Colour modes",
    "anchor": "colour-modes",
    "body": "Independent of the theme, Color mode offers: Light System - follows your OS preference and switches automatically when you do. Dark - the default. Private Chat keeps its own dark look whichever mode you pick."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Font size",
    "anchor": "font-size",
    "body": "Pick Small, Normal or Large. The choice is applied as a scale to rem-based and pixel-based text sizes alike, so headings, body copy and chrome stay in proportion. Normal sits a touch below the usual 16 px default; Small and Large bracket it. Native dialogs such as file pickers follow your OS scale instead - see…"
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Reduced motion",
    "anchor": "reduced-motion",
    "body": "If your OS is set to reduce motion, Loach follows it: spinners, pulses, the drop-zone glow and the open and close transitions of menus and dialogs stop animating, and smooth scrolling becomes an instant jump."
  },
  {
    "title": "Themes",
    "url": "pages/features/themes.html",
    "heading": "Window chrome",
    "anchor": "window-chrome",
    "body": "Loach uses a borderless window on Windows, Linux and macOS. Its own title bar carries the sidebar toggle, the search box, the Private Chat button and the window controls (minimise, maximise, close) - on the right on every platform, so you do not lose any controls by going borderless. Drag the title bar to move the…"
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "OTA updates",
    "anchor": "",
    "body": "Loach has a built-in updater so you do not have to keep an eye on the releases page. New features, performance work and security patches arrive directly from the app on every install format Loach ships - with an optional check at launch that tells you when a new version is out."
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "By install format",
    "anchor": "install-formats",
    "body": "Windows (NSIS) - the updater downloads the signed installer and runs it in passive mode (a progress window, no questions), then Loach restarts. No re-download from a browser needed. Linux AppImage - same flow. The updater replaces the AppImage on disk. Linux .deb / .rpm - the signed package is downloaded and handed…"
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "Checking and installing",
    "anchor": "checking",
    "body": "Settings → Updates shows your current version and a Check for updates button, which works whether or not the auto-check is on: Up to date: You’re on the latest version., with a Check again button. A newer release: the new and current version numbers, that release’s notes under What’s new, and Install update /…"
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "Auto-check for updates",
    "anchor": "auto-check",
    "body": "Off by default. Switch on Auto-check for updates in Settings → Updates and Loach asks the release server once per launch whether a newer version exists; the switch takes effect from the next launch. If a newer version exists, an Update available dialog opens with the current and new version numbers, that release’s…"
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "What’s new",
    "anchor": "release-notes",
    "body": "Every release ships with a markdown notes file that populates the GitHub release body, the in-app Updates panel and the Update available dialog when an upgrade is available. Skim it before clicking install if you want to know what is changing."
  },
  {
    "title": "OTA updates",
    "url": "pages/features/ota-updates.html",
    "heading": "Signing",
    "anchor": "signing",
    "body": "Update bundles are cryptographically signed. The updater verifies the signature against a key bundled with the app before replacing any binary on disk, so a man-in-the-middle on the download channel cannot swap in a tampered build. This Ed25519 signature check is what guards in-app updates on every platform. It is…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Onboarding wizard",
    "anchor": "",
    "body": "A six-step wizard runs on first launch and after a factory reset. Each step saves its own choices before moving on, so closing the wizard part-way still leaves the app in a consistent state - you can finish setting things up from Settings later."
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "The steps",
    "anchor": "steps",
    "body": "1. Welcome - Welcome to Loach with a Get started button, plus Restore from backup for anyone arriving from another install with a full export in hand. Restoring replaces the app’s data with the backup’s and reloads Loach, which then skips the rest of the wizard. 2. Pick a provider - the only required step. Choose…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Recommended defaults",
    "anchor": "recommended-defaults",
    "body": "Global memories - off. When on, every reply triggers a second, hidden call to the chat’s model that notes lasting facts about you, and those facts go with every chat - local or cloud provider alike. Private Chat never uses memory. See Memory. Temporal awareness - on. Every chat gets the current date, weekday and…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Choosing a model",
    "anchor": "model-recommendation",
    "body": "When Ollama is running but has no models, the provider step reads your machine’s capacity and leads with a single Recommended for this machine card - the largest catalog entry that runs comfortably and fits your free disk space - with a Pull this one button, instead of asking a newcomer to pick blind from a dozen…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Connecting an OpenAI-compatible endpoint",
    "anchor": "openai-path",
    "body": "The OpenAI API path asks for a Base URL (defaults to https://api.openai.com/v1; change it for vLLM, LM Studio, LiteLLM or any OpenAI-compatible proxy) and an API key. The key is optional: local servers such as LM Studio usually need none, so leave it blank. Verify & save stores the key in your OS credential manager…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Downloads that outlive the wizard",
    "anchor": "downloads",
    "body": "Starting a pull pins that model as your default and unlocks Continue right away, so you can finish setup while it downloads. A progress strip pinned to the bottom of every remaining step shows each pull, with a stop button per download - Ollama keeps the layers it already fetched, so a re-pull resumes from them.…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "When Ollama is not reachable",
    "anchor": "ollama-not-running",
    "body": "The provider step shows Ollama isn’t reachable with three buttons: Start Ollama, Download Ollama (opens ollama.com) and Change URL, for an Ollama on another port or machine. It offers to start Ollama before suggesting a download, since “installed but not running” and “not installed” look identical from a failed probe…"
  },
  {
    "title": "Onboarding wizard",
    "url": "pages/features/onboarding.html",
    "heading": "Dismissing and resuming",
    "anchor": "dismissing",
    "body": "Press Esc or click × on any step to close the wizard. On Pick a provider it asks first - Skip setup? with Keep configuring and Skip anyway - because the app needs a provider before you can chat; you can set one up later in Settings → Providers. Steps you have completed stay saved, but the step you close on is not…"
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Keyboard shortcuts",
    "anchor": "",
    "body": "Loach is keyboard-friendly. Press Ctrl + / to open an in-app cheat sheet of the nine app-wide shortcuts below; the dialog and the handler read the same table, so the keys listed there are the keys the app actually listens for. The composer, palette and finder keys further down aren’t in it. On macOS, ⌘ stands in for…"
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Navigation",
    "anchor": "navigation",
    "body": "Ctrl + K - open the search palette across chats, messages, Spaces and Snippets. Ctrl + N - start a new chat outside any Space."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Chat",
    "anchor": "chat",
    "body": "Ctrl + F - find within the current chat transcript, with browser-style match highlighting and a match counter. Does nothing unless a chat with at least one message is on screen. Ctrl + U - attach files to the current chat (opens the file picker). Ctrl + Shift + Backspace (or Delete) - delete the current chat, after a…"
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Layout",
    "anchor": "layout",
    "body": "Ctrl + Shift + S - show or hide the left sidebar. Ctrl + Shift + P - show or hide the parameters panel while a chat is open."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Security",
    "anchor": "security",
    "body": "Ctrl + Shift + L - lock Loach now, when an app lock is configured. It works in Private Chat and during onboarding too."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Help",
    "anchor": "help",
    "body": "Ctrl + / - open the keyboard-shortcuts cheat sheet, or close it again."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "In the composer",
    "anchor": "composer",
    "body": "Enter - send the message, or run the typed slash command. Shift + Enter - insert a newline without sending. Use this for multi-paragraph prompts. / - typed as the first character, opens the slash-command palette."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "In the slash-command palette",
    "anchor": "slash-palette",
    "body": "↑ / ↓ - move through the filtered command list. The selection wraps around at either end. Tab - complete the highlighted command. Enter - run a fully-typed command, or complete a partial one. Esc - dismiss the palette for the current draft. Anything that isn’t a recognised command is sent as an ordinary message."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "In the search palette",
    "anchor": "search-palette",
    "body": "↑ / ↓ - move between results. Enter - open the highlighted result. A chat opens the conversation; a message opens its chat and jumps to that turn; a Space opens its detail view; a Snippet starts a fresh chat with the snippet’s prompt primed in the composer. Tab - move between the palette’s controls. Focus stays…"
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "In the in-chat finder",
    "anchor": "in-chat-find",
    "body": "Enter or ↓ - jump to the next match. Shift + Enter or ↑ - jump to the previous match. Both directions wrap around. Esc - close the finder and clear the highlights."
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "In fields and dialogs",
    "anchor": "fields-dialogs",
    "body": "Enter - save a rename (a chat in the sidebar, the chat header or a Space’s chat list); Esc cancels it. Enter - in the memory editor, add or save a fact (Shift + Enter for a newline while editing); Esc cancels an edit. Enter - in a Snippet’s fill-in dialog, move to the next blank; on the last one, put the filled-in…"
  },
  {
    "title": "Keyboard shortcuts",
    "url": "pages/features/keyboard.html",
    "heading": "Where shortcuts do not apply",
    "anchor": "system",
    "body": "The app lock screen blocks every shortcut and the search palette. While the onboarding wizard or Private Chat owns the window, the app-wide shortcuts and the search palette are off too - except Ctrl + Shift + L, which locks Loach from anywhere. Esc still dismisses menus and dialogs, and exits onboarding (with a…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Storage & privacy",
    "anchor": "",
    "body": "Loach is local-first. Your content lives on your machine, and nothing goes over the network unless you set up something that needs it - a remote provider, web fetch, an MCP server, the update check. Here’s exactly what is stored, where, and what leaves your machine and when."
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Where things live",
    "anchor": "where",
    "body": "What Where Chats and messages (with their tool calls and results), folders, labels, pinned responses, Spaces with their sources and memories, global memories, Snippets with their variables and saved fill-ins, MCP servers, app settings SQLite at <app-data-dir>/loach.db, plus its -wal and -shm files Attached files…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Offline by default",
    "anchor": "offline",
    "body": "With a local Ollama, Loach launches and works completely offline. All of these need no network access: The Models library Spaces, Snippets and memory Search across chats, messages, Spaces and Snippets The parameters panel The app lock Full chat history, and Private Chat Built-in tools, working folders and LaTeX math…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "No telemetry",
    "anchor": "no-telemetry",
    "body": "Loach does not phone home. There is no account, no usage tracking, no analytics, no crash reporting service. The app window itself can’t reach the internet: its content security policy allows no remote scripts, images or connections, and no inline scripts or eval, so every request goes through Loach’s backend - and…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "What goes over the network, and when",
    "anchor": "network",
    "body": "Destination When Your Ollama base URL (http://localhost:11434 by default) At launch, to see whether Ollama is running and list its models; then for every chat, model preload and Models-tab action. Pulling a model makes Ollama download it from its library - that connection is Ollama’s, not Loach’s. Your…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "What a remote provider receives",
    "anchor": "remote-providers",
    "body": "A chat on a remote endpoint sends that provider everything the model needs for the turn: The system prompt - the instructions that apply (the Space’s, the chat’s or your Custom instructions), the persona and tone, the date, weekday and timezone while Temporal awareness is on, your name wherever {{USER_NAME}} appears…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Secrets handling",
    "anchor": "secrets",
    "body": "The API key and the app-lock credentials are stored in your operating system’s credential manager via the keyring crate, under the service name dev.loach.app: On Windows - the Credential Manager. On Linux - the Secret Service (GNOME Keyring / KWallet / equivalent). One has to be running and unlocked, or the key won’t…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Files and programs",
    "anchor": "files-programs",
    "body": "File access goes through Loach’s backend. Saving an export or an attachment, importing a backup and picking a working folder all use native dialogs, and the backend does the reading and writing, so the app window can’t read or overwrite a file you didn’t pick. Working folders are sandboxed. The model reaches only the…"
  },
  {
    "title": "Storage & privacy",
    "url": "pages/privacy.html",
    "heading": "Backup, restore and wipe",
    "anchor": "backup",
    "body": "From Settings → Data you can: Export data - save your full content (chats, folders, Spaces with their sources and memories, global memories, Snippets and variables, MCP servers, settings) to a single JSON file. MCP headers and environment variables are left out, and so are secrets in a server’s arguments (a password…"
  },
  {
    "title": "Tech stack",
    "url": "pages/tech-stack.html",
    "heading": "Tech stack",
    "anchor": "",
    "body": "For the curious, here’s the stack behind Loach at a glance."
  },
  {
    "title": "Tech stack",
    "url": "pages/tech-stack.html",
    "heading": "Stack at a glance",
    "anchor": "stack",
    "body": "Layer Choice Desktop shell Tauri 2.x (Rust) Frontend React 19 + Vite 8 + TypeScript Styling Tailwind CSS 3 + shadcn/ui (Radix primitives) + tailwindcss-animate + @tailwindcss/typography Icons lucide-react State Zustand (in-memory; SQLite-backed where appropriate) Storage SQLite via rusqlite (bundled - no system…"
  },
  {
    "title": "Tech stack",
    "url": "pages/tech-stack.html",
    "heading": "Toolchain",
    "anchor": "toolchain",
    "body": "Building from source needs Node.js 20.19+ (or 22.12+) and Rust 1.88+ - the minimum the dependency tree allows; CI and the Docker build pin Rust 1.88.0 and Node.js 22. Linux builds target glibc 2.35, so Ubuntu 22.04 and Debian 12 are the oldest supported distributions. See Build from source."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "FAQ",
    "anchor": "",
    "body": "Short answers to the things people ask most often."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Is Loach free?",
    "anchor": "general",
    "body": "Yes. Loach is open source under the MIT license. There are no subscriptions, paywalled features, or usage limits inside the app. If you connect to a paid endpoint (e.g. OpenAI), you pay them for tokens - Loach itself is free."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Which platforms are supported?",
    "anchor": "general",
    "body": "Native desktop apps for Windows, Linux and macOS (Apple Silicon, macOS 11 or later) are published with every release. The macOS build is not Apple-notarized, so first launch needs a one-time Gatekeeper bypass - see Installation → macOS. Intel Macs are not supported."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Does Loach send my data anywhere?",
    "anchor": "general",
    "body": "No, not on its own. There is no telemetry. The only outbound requests Loach initiates are the ones you set up: generations against the remote provider you configured - including whatever goes into the prompt, such as your memories and files the model reads from a chat’s folder - model pulls you start, web fetches and…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Does Loach update itself?",
    "anchor": "general",
    "body": "Only when you ask. Settings → Updates has a manual Check for updates button and an opt-in Auto-check for updates switch that looks once per launch and shows an Update available dialog with the release notes. Nothing downloads until you pick Update now (or Install update in the panel). In-app updates work on Windows…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Which Linux distributions are supported?",
    "anchor": "general",
    "body": "Builds target glibc 2.35, so Ubuntu 22.04 and Debian 12 are the oldest supported releases; anything newer works. Pick .deb, .rpm or .AppImage - all three update in-app."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Where does Loach store my chats?",
    "anchor": "general",
    "body": "In a SQLite database at <app-data-dir>/loach.db, attachments included: Windows: %APPDATA%\\dev.loach.app\\loach.db Linux: ~/.local/share/dev.loach.app/loach.db macOS: ~/Library/Application Support/dev.loach.app/loach.db"
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
    "heading": "Which local models can I run?",
    "anchor": "models",
    "body": "Anything supported by Ollama. Popular choices include Qwen, Gemma, DeepSeek, GPT-OSS, Mistral and Llama derivatives. Use the in-app Models tab to pull and manage them. If you have nothing pulled yet, the onboarding wizard recommends a model sized against your GPU’s VRAM (or system RAM when there’s no discrete GPU…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Can I use both a local and a remote provider?",
    "anchor": "models",
    "body": "Yes - that’s the point. Ollama and your OpenAI-compatible endpoint live side-by-side, and you switch between them from the chat header without changing anything else."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Can I connect multiple OpenAI-compatible endpoints at once?",
    "anchor": "models",
    "body": "One at a time. The base URL and API key are a single configuration in Settings → Providers. To switch from, say, Groq to OpenRouter, update the base URL and key - your existing chats are preserved."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "I have very limited VRAM. Can I still use local models?",
    "anchor": "models",
    "body": "Yes - try smaller quantizations (e.g. a 4-bit 3B/4B model), and enable Low VRAM mode globally or per-chat. This sends Ollama’s low_vram flag with every request."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Can the model call tools?",
    "anchor": "tools",
    "body": "Yes, if the model supports tool calling. Loach ships built-in tools that run locally - calculator, date/time, counting, hashing, UUIDs, base64, JSON, unit conversion, text diff, sorting, IP maths and PDF generation - each opt-in from Settings → Tools. Give a chat a folder and the model also gets tools to work with…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Can the model read or edit my files? Is it sandboxed?",
    "anchor": "tools",
    "body": "Only the files in a folder you give the chat: click + next to the message box and choose Add directory. The model can then list, find, read and search files in that folder, and write, edit, move or delete them - but each change is shown to you first (the new contents, a line-by-line diff, from → to, or a deletion…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "What is LOACHFILE.md?",
    "anchor": "tools",
    "body": "A Markdown file at the root of a chat’s folder holding the project’s own instructions - how to run the tests, what not to touch, house style - the same idea as a CLAUDE.md or AGENTS.md. Loach adds it to the system prompt on every turn and reads it fresh each time, so an edit applies on your next message. Up to 32 KB…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Why does a tool call ask for my approval?",
    "anchor": "tools",
    "body": "So nothing runs or changes behind your back. Two kinds of calls pause the reply and show an approval card: MCP tool calls, with the server, the tool and its arguments, and the file tools that change files, with the change itself. Answer Allow once, Always allow that tool (Allow … for this chat for a file change), or…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Can I run local MCP servers?",
    "anchor": "tools",
    "body": "Yes. In Settings → MCP, add a server as Local process (stdio): a command (npx, uvx, node or a full path), one argument per line, and optional NAME=value environment variables. Before a local program starts - when you test it, save it switched on, change what it runs, or turn it on - a native system dialog shows…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "What are global memories, and are they on by default?",
    "anchor": "memory",
    "body": "They’re off by default. Turn on Settings → Features → Global memories (or the same switch in setup’s Pick your defaults step). After each reply in a chat outside a Space, Loach asks the chat’s own model to note lasting facts about you - updating or dropping ones that changed, with an Undo on every change - and adds…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Does Private Chat use memory or tools?",
    "anchor": "memory",
    "body": "It never reads or writes memory of either kind, and it gets no MCP tools, no web fetch and no working folder. Built-in tools you’ve turned on in Settings → Tools still work, since they run entirely on your machine. Private Chat also offers only local Ollama models and leaves out your Custom instructions, Space…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Where are my API keys stored?",
    "anchor": "security",
    "body": "Your OpenAI-compatible API key lives in your operating system’s credential manager - Windows Credential Manager, the Linux Secret Service, or the macOS Keychain - and is never written to the SQLite database or to plain-text config. It’s only sent over https://, or over http:// to this computer. MCP servers are the…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "How does the app lock work?",
    "anchor": "security",
    "body": "Optional PIN (4, 6 or 8 digits), password (at least 8 characters), or both. Your credentials are hashed with Argon2id and stored in the OS credential manager (separately from API keys). The plaintext is never persisted. Configure it in Settings → Security."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "I forgot my app-lock PIN. Can I reset it?",
    "anchor": "security",
    "body": "Not from inside Loach. There is no recovery path by design: the lock is an Argon2id hash in the OS credential manager that Loach cannot reverse, and Factory reset itself asks for your credentials. Try the hint you set when creating the lock. Otherwise, delete the lock’s entry from the credential store by hand…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Can Loach lock itself when I walk away?",
    "anchor": "security",
    "body": "Yes. Once an app lock is configured, Settings → Security offers Lock after inactivity (1, 5, 15 or 30 minutes) and Lock when minimized, both opt-in. Ctrl + Shift + L locks immediately from anywhere in the app. See App lock → Auto-lock."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "How do I back up my chats?",
    "anchor": "data",
    "body": "Open Settings → Data and use Export data. You’ll get a single JSON file containing chats, folders, Spaces (with their sources and memories), global memories, Snippets and snippet variables, MCP servers and settings. API keys are not in the export - they live in the OS credential manager - and neither are MCP headers…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "How do I move Loach to a new machine?",
    "anchor": "data",
    "body": "Install Loach on the new machine, then use Import data in Settings → Data - or Restore from backup on the onboarding wizard’s welcome screen - with the JSON file you exported from the old one. Importing replaces everything in the new database. Afterwards, re-enter your API key and any MCP headers or environment…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "How do I delete everything?",
    "anchor": "data",
    "body": "Settings → Data → Erase… opens Erase & Reset. Factory reset wipes the database, clears every setting, and removes the API key and the app lock from the credential store; Loach then reloads into onboarding. Remove my data is the gentler option - it drops chats, folders, Spaces, memories, Snippets and MCP servers but…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "The model dropdown is empty.",
    "anchor": "troubleshooting",
    "body": "For Ollama: make sure the server is running and at least one model is pulled. When it isn’t running, the model picker shows Not running and a Start Ollama button, and Auto-launch Ollama in Settings → Providers starts it whenever Loach opens (both work only for an Ollama on this computer). Loach probes…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Generations are very slow on my machine.",
    "anchor": "troubleshooting",
    "body": "Try a smaller model or a more aggressive quantization. Turn on Model preloading so the first request doesn’t wait on a cold start, and raise Keep model loaded in Settings → Features so it stays resident between prompts. Enable Low VRAM mode if you’re memory-constrained. For Ollama-side levers such as flash attention…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "A reply ends with “Stopped after 10 tool-use turns”.",
    "anchor": "troubleshooting",
    "body": "Each reply gets at most 10 rounds with the model, so a model stuck in a loop can’t run forever: tools can run in the first nine, and the last round goes out without tools so the model can wrap up. This error means it asked for tools anyway, and those calls weren’t run. Send a follow-up such as “continue” to give it…"
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Markdown / code blocks render badly.",
    "anchor": "troubleshooting",
    "body": "That usually means the model output isn’t well-formed Markdown. Lower the temperature, or add an explicit instruction like “Reply in valid GitHub-flavoured Markdown”. Loach uses remark-gfm + rehype-highlight under the hood, so anything valid will render."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "A formula shows as raw TeX.",
    "anchor": "troubleshooting",
    "body": "Single-dollar spans are treated as currency unless they clearly read as math, and TeX that doesn’t parse shows its own source on purpose. Ask the model for $$…$$, \\(…\\) or a ```math fence. See LaTeX math and Troubleshooting."
  },
  {
    "title": "FAQ",
    "url": "pages/faq.html",
    "heading": "Where do I report a bug or request a feature?",
    "anchor": "troubleshooting",
    "body": "Open an issue on the GitHub repository: github.com/ztcs-software/loach/issues. Please include your OS, Loach version, and steps to reproduce."
  },
  {
    "title": "Troubleshooting",
    "url": "pages/troubleshooting.html",
    "heading": "Troubleshooting",
    "anchor": "",
    "body": "Common problems and how to fix them. Pick a category below - each entry follows the same shape: a short description of what you’re seeing, then what to do about it."
  },
  {
    "title": "Troubleshooting",
    "url": "pages/troubleshooting.html",
    "heading": "Categories",
    "anchor": "categories",
    "body": "Providers & connections Ollama not running or failing to start, OpenAI 401s and keys withheld over plain http://, Linux key storage, empty model lists, API models missing from the picker. Sending & receiving messages Stuck “waiting” chats, half-streamed replies, missing thinking traces, formulas shown as raw TeX…"
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "Providers & connections",
    "anchor": "",
    "body": "Loach talks to providers over HTTP. When the model dropdown is empty or every request fails, the problem is almost always reachability, authentication or key storage."
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "Ollama is installed but Loach can’t see it",
    "anchor": "ollama-unreachable",
    "body": "Test connection in Settings → Providers says Connection failed, the model picker lists Ollama as Not running, or the model dropdown is empty even though ollama list works in a terminal. Make sure Ollama is running. If it’s installed on this computer, click Start Ollama in the model picker, or turn on Auto-launch…"
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "“Start Ollama” shows an error",
    "anchor": "start-ollama-fails",
    "body": "Clicking Start Ollama in the model picker ends in a red message under the button. “Couldn’t find the Ollama executable” - Loach looks for ollama on your PATH and in Ollama’s default install location. Install Ollama, or start it yourself with ollama serve. “… Loach can only start Ollama on this computer” - the base…"
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "OpenAI says “invalid key” or returns 401",
    "anchor": "openai-401",
    "body": "You added an OpenAI-compatible API key but every request fails with 401 (“API key invalid or expired”). Re-enter the key under OpenAI API key in Settings → Providers and click Save. Keys are stored in the operating system’s credential store, not on disk. Leading and trailing spaces are trimmed before saving, so a…"
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "Key won’t save on Linux",
    "anchor": "linux-secret-service",
    "body": "Saving the key shows a Couldn’t save API key error, or when you reopen Settings the key field shows the sk-… placeholder instead of •••••••• (stored). (The field itself is always blank - a saved key is never shown back.) Loach uses the system Secret Service to store secrets. On minimal Linux installs (server-style…"
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "Models list shows no models",
    "anchor": "empty-model-list",
    "body": "Ollama is reachable but the list is empty. You haven’t pulled any models yet. In the Models tab, click Pull model, type a tag (for example llama3.1:8b ), and wait for the download to finish. The Models tab refreshes on its own when the download completes; if the chat-header picker doesn’t list the model yet, click…"
  },
  {
    "title": "Providers & connections",
    "url": "pages/troubleshooting/providers-connections.html",
    "heading": "The API models are missing from the picker",
    "anchor": "api-models-missing",
    "body": "The API group in the model picker says Not connected or No models, it emptied after you cleared your key, or the model you want isn’t listed. With the default OpenAI base URL, nothing is listed until a key is saved, and clearing the key empties the list on purpose - those models could only fail at send time. A base…"
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "Sending & receiving messages",
    "anchor": "",
    "body": "Generation runs through a single FIFO queue and Loach exposes whatever the provider reports. Most message-level oddities trace back to one of those two facts."
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "My new message is stuck on “waiting”",
    "anchor": "stuck-waiting",
    "body": "You sent a prompt in one chat but it shows a spinner without streaming anything. Loach runs one generation at a time across all chats. If another chat is busy, your message is parked in a FIFO queue, and the chat shows a Waiting for other chats to finish… card. Wait for the current generation to finish, or Click…"
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "The reply stopped halfway and shows an error",
    "anchor": "reply-half-error",
    "body": "A streaming reply errored, and the bubble ends with an italic error line starting with ⚠. Whatever streamed before the failure is kept - open the message’s … menu and use Copy message if you want to preserve it. To get a full answer, send the same prompt again, or click Regenerate in the same menu if it’s there (it’s…"
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "I see no “thinking” trace even though the model supports reasoning",
    "anchor": "no-thinking-trace",
    "body": "A reasoning model is selected but no thinking block appears above the answer. Open the Parameters panel (Ctrl + Shift + P) and confirm the Thinking toggle is on for this chat. Make sure the model actually advertises the thinking capability - when it doesn’t, the Thinking row in the panel is disabled with This model…"
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "A formula shows as raw TeX instead of rendering",
    "anchor": "raw-tex",
    "body": "The reply contains \\frac{a}{b} or similar and you see the source, not typeset math. Which case it is: Broken TeX renders as its own source on purpose, with the parse error on hover - that keeps a half-typed formula quiet while it streams rather than flashing an error. Hover it to see what KaTeX objected to. $…$…"
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "The metrics chip is missing or doesn’t match my provider",
    "anchor": "missing-stats",
    "body": "A reply has no tokens-per-second chip, or its token count or speed doesn’t line up with what the backend or your provider’s dashboard reports. No chip at all. The chip appears only once a reply finishes. Replies you stopped, ones cut short by Respond now, and ones that ended in an error don’t get one. Different token…"
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "Compact context is greyed out or won’t run",
    "anchor": "compaction",
    "body": "The Compact context button in the context-usage popover is disabled, or compacting shows an error. Greyed out. The button needs at least six messages that haven’t been compacted yet and a quarter of the context window in use. /compact only needs the six messages. “Chat is busy”. Wait for the chat’s reply to finish…"
  },
  {
    "title": "Sending & receiving messages",
    "url": "pages/troubleshooting/messages.html",
    "heading": "Replies are off-topic, repetitive, or too short",
    "anchor": "bad-output",
    "body": "The model is technically responding but the quality is poor. Open the Parameters panel. Temperature, Max Tokens and Repeat Penalty only appear in its Advanced view: Lower Temperature for more focused answers, raise it for more variety. Raise Max Tokens if the answer keeps cutting off. Raise Context Length if the…"
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "Performance & VRAM",
    "anchor": "",
    "body": "When the GPU runs out of room, the UI feels heavy, or generation is slower than the hardware should manage, there are a handful of dials that almost always fix it."
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "Ollama crashes with “out of memory” or the model fails to load",
    "anchor": "ollama-oom",
    "body": "A pull works, but the model fails to load or the reply fails with “ran out of memory loading or running the model. Lower the context length or pick a smaller model.” Turn on Low VRAM in the parameters panel (or globally with Settings → Features → Low VRAM mode ). This forces smaller batches and a leaner KV cache.…"
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "Onboarding sized my machine wrong",
    "anchor": "onboarding-sizing",
    "body": "The model recommendation calls a model too big (or too small) for what your hardware actually manages, or names a constraint you don’t recognise. The card names the number it used - “Based on 8.0 GB VRAM · NVIDIA GeForce RTX 4060 · 120 GB free on disk”, or a RAM figure when there’s no usable GPU reading. Which one…"
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "The UI feels sluggish",
    "anchor": "sluggish-ui",
    "body": "Scrolling, typing, or window resizing is choppy. In Settings → Appearance, switch the theme from Aurora to Solid. Aurora’s heavily blurred gradient and translucent panels are heavy on weak GPUs. Long chats mount only their latest 50 messages; Show earlier messages, Search in chat or jumping to an old pinned response…"
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "The first reply takes forever, even on a fast model",
    "anchor": "slow-first-reply",
    "body": "Sending the first prompt of the day takes 10+ seconds before streaming starts; subsequent replies are instant. Ollama loads the model into VRAM on first use. To preload at launch, turn on Preload on startup under Settings → General → Default model (available when the default model is an Ollama model). Only that model…"
  },
  {
    "title": "Performance & VRAM",
    "url": "pages/troubleshooting/performance.html",
    "heading": "Making Ollama generate faster",
    "anchor": "ollama-faster",
    "body": "Generation is slower than you’d expect, or you want to squeeze more tokens/sec out of your hardware. These are environment variables on the Ollama server (not Loach settings) - set them where ollama serve runs, then restart it. As of Ollama 0.5+: OLLAMA_FLASH_ATTENTION=1 - enables flash attention, which lowers memory…"
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "Attachments",
    "anchor": "",
    "body": "Files are read when you attach them and added to your message when you send. The most common surprises are size caps, file types Loach can’t decode, and images the model doesn’t see. See Attachments for how it all works."
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "“… is larger than 20 MB” when attaching a file",
    "anchor": "file-too-large",
    "body": "The message box refuses the file with that message under the input. There’s a 20 MB cap per file, whether you drop, paste or pick it. Split large logs, or paste the relevant section as text instead."
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "“Couldn’t read …” when attaching a file",
    "anchor": "unreadable-file",
    "body": "The file doesn’t attach, and the message box shows “Couldn’t read name :” followed by a reason (in Private Chat, just “Failed to read file”). Loach couldn’t parse the file. The usual causes are a damaged file, a password-protected PDF or DOCX, or a file whose extension doesn’t match its contents. Remove the password…"
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "The PDF came in empty or with garbled text",
    "anchor": "empty-pdf",
    "body": "The model says it can’t see the document, even though you attached a PDF. Loach extracts text from PDFs, but scanned PDFs (image pages with no text layer) have no text to extract - the model only gets a note saying so. Run the PDF through an OCR tool first, paste the relevant pages as plain text, or export the pages…"
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "The model can’t read my Word document",
    "anchor": "docx-rejected",
    "body": "A .doc file attached, but the model says it only knows the file’s name. Only .docx is extracted, not legacy .doc. A .doc still attaches, but as a file the model is told about by name only. Open it in Word or LibreOffice and Save As → Word Document (.docx)."
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "A long document’s chip says “truncated”",
    "anchor": "content-truncated",
    "body": "A long PDF or text file was attached, its chip carries a truncated pill, and only part of it reached the model. Per-file cap is 200,000 characters; total inlined content per message is 500,000 characters, counting your prompt and fetched pages too. Files past that per-message budget are clipped or left out without a…"
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "A PDF I sent shows “Preview not available”",
    "anchor": "sent-pdf-no-preview",
    "body": "Clicking a PDF chip on a sent message opens a file card instead of the pages, and Save gives you a .txt file. In a regular chat, Loach keeps a PDF’s original bytes only while it sits in the message box; the sent message stores the extracted text. Preview the PDF from its chip before you send, and keep your original…"
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "Dropping a file onto Private Chat does nothing",
    "anchor": "private-chat-drop",
    "body": "The cursor shows a no-entry sign and nothing attaches. Expected: dropping files is switched off while Private Chat is open, so a file can’t land in the regular chat behind it. Use the + button in Private Chat’s message box instead."
  },
  {
    "title": "Attachments",
    "url": "pages/troubleshooting/attachments.html",
    "heading": "Images don’t seem to be working",
    "anchor": "vision-images",
    "body": "You attached a PNG/JPEG but the model can’t describe it. The model needs vision capability - check the model’s page in the Ollama library or the capabilities that ollama show <model> lists. Switch to a vision-capable model (Llava, Llama 3.2 Vision, GPT-4o, etc.) and re-send. Also check that: The image is PNG, JPEG…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "Tools, MCP & folders",
    "anchor": "",
    "body": "Web fetch, MCP servers and working folders all have hard safety guards. Most surprises trace back to one of those guards firing - or to a prompt waiting for your answer."
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "Pasted URL is ignored",
    "anchor": "url-ignored",
    "body": "Your prompt has a link but the model only sees the bare URL, not the page content. Web fetch is off by default. Turn it on in Settings → Tools → Web fetch, or type /web-fetch on. Only http:// and https:// URLs are fetched, and only those in the text you type - not links inside attached files or ones the model…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "“Refusing to fetch …” for localhost, 192.168.x, or my office VPN",
    "anchor": "url-blocked",
    "body": "Loach refuses to fetch an internal URL. This is intentional. The SSRF guard rejects localhost and any URL whose resolved IP lands on loopback, link-local, private RFC1918 ranges, carrier-grade NAT (100.64.0.0/10, which Tailscale uses) or IPv6 unique-local addresses (fc00::/7 ), even if the hostname looks public but…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "A URL fetch failed or came back cut short",
    "anchor": "fetch-failed",
    "body": "The model is told a URL was attempted but no content came back - the reply’s tool-call block shows a red warning - or only part of the page arrived. Expand the tool-call block on the reply and open its web_fetch entry to read the reason. A fetch fails on: The 30 s total timeout or the 10 s connect timeout, A non-2xx…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "MCP “Test connection” fails (HTTP)",
    "anchor": "mcp-test-fail",
    "body": "An HTTP MCP server is configured but the test button reports an error. Confirm the URL is the Streamable HTTP endpoint. Loach does not support the legacy two-endpoint SSE transport. If the server is distributed as a command to run (npx …, uvx … ), add it as a Local process (stdio) server instead. If the server…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "A local (stdio) MCP server won’t start",
    "anchor": "stdio-wont-start",
    "body": "Test connection on a stdio server fails, or a chat shows an error for it, with “couldn’t start”, “exited before replying”, or “did not reply … within 60s”. (Saving doesn’t start the server - it first runs when you test it, list tools with /tools, or send a message with it enabled.) Use Test connection in Settings →…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "A server imported from a backup is disabled and won’t turn on",
    "anchor": "mcp-import-disabled",
    "body": "After Settings → Data → Import data, a stdio MCP server shows up switched off, and flipping the switch opens a system dialog. That is deliberate: a backup can’t prove you configured that command on this machine, so imported stdio servers arrive disabled and the first enable asks you to confirm the command line.…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "The reply is stuck on “Waiting for your approval…”",
    "anchor": "approval-waiting",
    "body": "The assistant bubble shows an approval card and nothing else happens. The model asked to run an MCP tool, or to change a file in the chat’s working folder, and Loach is waiting for you - answer Allow once, Always allow (Allow … for this chat for a file change), or Deny on the card. A card left unanswered for 10…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "“Stopped after 10 tool-use turns”",
    "anchor": "tool-turn-limit",
    "body": "A reply ends with this error while the model is still calling tools. Each reply gets at most 10 rounds with the model, so a model stuck in a loop can’t run forever: tools can run in the first nine, and the tenth is sent without tools so the model can wrap up. This error means it asked for them anyway, and those calls…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "“… does not support tools” after turning a tool on",
    "anchor": "tools-unsupported",
    "body": "Every message to a local model now fails with an Ollama error ending in “does not support tools”. Loach sends the tools you switched on - built-in tools, enabled MCP servers, a chat’s working folder - with every request, whatever the model. A model without tool calling can’t take them, and Ollama refuses the request.…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "Can’t add a folder, or the model doesn’t use it",
    "anchor": "workspace-folder",
    "body": "Add directory is greyed out or refuses the folder, or the model says it has no file tools. Send a message first to start this chat - a brand-new chat can’t have a folder until its first message is sent. Wait for the reply to finish - the folder can’t be changed or removed while a reply is running in the chat. “Pick a…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "The model can’t use a file or folder name on Windows",
    "anchor": "windows-names",
    "body": "A file tool refuses a path with “contains: ”, “ends with a dot or a space”, or “is a device name Windows reserves”. Those names are refused on purpose: a: names a hidden data stream, and CON, nul.txt or a trailing dot would be created as files that Explorer and most tools can’t open or delete. Ask the model to pick…"
  },
  {
    "title": "Tools, MCP & folders",
    "url": "pages/troubleshooting/web-fetch-mcp.html",
    "heading": "A file write or edit is refused",
    "anchor": "workspace-edit-refused",
    "body": "The model’s file change fails, and the tool-call entry shows why. “old_text does not appear” or “appears N times” - the snippet must match the file exactly once (or the model must ask to replace every occurrence). The model can re-read the file and try again with more context. “is stored as windows-1250, which has no…"
  },
  {
    "title": "Spaces & memory",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Spaces & memory",
    "anchor": "",
    "body": "Spaces layer shared context over your chats. Memory is learned from completed replies - per Space (on by default) and globally (off until you turn it on) - and has hard caps."
  },
  {
    "title": "Spaces & memory",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Memories aren’t being saved",
    "anchor": "memory-not-saved",
    "body": "You expect memory to pick up facts, but nothing appears in the Space’s Memory tab or the global memories list. Memory extraction only runs after a complete assistant reply. Cancelled or errored turns are skipped. In a Space, the switch on the Space’s Memory tab must be on. Outside a Space, nothing is saved until you…"
  },
  {
    "title": "Spaces & memory",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Memory captured something wrong or private",
    "anchor": "bad-memory",
    "body": "A bad fact landed in long-term memory. Right after it lands, click Undo on the Saved to memory toast. Later, open the Space’s Memory tab - or, for global memories, Settings → Features → Manage global memories - and click the fact’s text to edit it, or hover the row and click the trash icon to delete it. /forget…"
  },
  {
    "title": "Spaces & memory",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "“Memory is off” when using /remember",
    "anchor": "remember-off",
    "body": "/remember answers Memory is off for “…” or Global memory is off and saves nothing. /remember follows the same switches as automatic memory. In a Space chat, turn on the switch on the Space’s Memory tab. Outside a Space, turn on Settings → Features → Global memories, or run the command in a chat inside a Space. The…"
  },
  {
    "title": "Spaces & memory",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "A memory is marked “not sent”",
    "anchor": "not-sent",
    "body": "The memory editor tags some older facts not sent, and the model doesn’t seem to know them. Each memory list sends only its newest facts, up to 60 facts and about 6,000 characters, so it can’t crowd a small context window. Older facts are kept but not sent. Delete facts you no longer need (or shorten long ones you…"
  },
  {
    "title": "Spaces & memory",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Reference sources won’t add to a Space",
    "anchor": "reference-cap",
    "body": "Adding a source to a Space fails or silently does nothing. Each file can be at most 20 MB (… exceeds the 20 MB limit ), and a Space’s sources at most 200 MB in total (… would exceed the 200 MB space limit; at the limit, Add source is disabled). Remove older sources, or move the content into a smaller text file. If a…"
  },
  {
    "title": "Spaces & memory",
    "url": "pages/troubleshooting/spaces-memory.html",
    "heading": "Space instructions seem to override my custom instructions",
    "anchor": "space-instructions",
    "body": "Your global Custom Instructions, or a chat’s own instructions, don’t appear to apply in chats inside a Space. This is by design. When a Space has its own instructions, they replace both the global ones and the chat’s own Additional instructions for chats in that Space. Either clear the Space’s instructions, or repeat…"
  },
  {
    "title": "App lock",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "App lock",
    "anchor": "",
    "body": "The app lock is a hard gate. Forgotten credentials can’t be recovered inside the app, and several destructive commands ask for them again even after you’ve unlocked."
  },
  {
    "title": "App lock",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "I forgot my PIN or password",
    "anchor": "forgot-pin",
    "body": "You can’t unlock the app. There is no recovery path inside the app. The lock is an Argon2id hash in your OS credential store; Loach cannot read or reverse it, and the in-app Factory reset asks for the credentials too. Your options are: Try the optional hint - click Show hint on the lock screen (it only appears if you…"
  },
  {
    "title": "App lock",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "“Too many failed attempts” on the lock screen",
    "anchor": "too-many-attempts",
    "body": "After several wrong PINs, every unlock attempt is refused with Too many failed attempts. Try again in N seconds. After 5 consecutive failed attempts, Loach starts an escalating cool-down (30 s → 60 s → 2 min … up to 2 h). Wrong credentials typed into a re-authentication prompt count toward it too. Wait for the window…"
  },
  {
    "title": "App lock",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "Changing or removing the lock asks for my current password",
    "anchor": "reauth-prompts",
    "body": "Even though the app is unlocked, changing the lock or running a destructive command prompts for the current credentials. This is intentional. Re-authentication is required for changing or removing the lock, Import data, Remove my data and Factory reset, so that a compromised UI process can’t quietly disable the gate.…"
  },
  {
    "title": "App lock",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "Loach keeps locking itself",
    "anchor": "keeps-locking",
    "body": "The lock screen appears mid-session, not just at launch. One of the two auto-lock triggers is on. Both live in the Auto-lock card in Settings → Security, which only appears once a lock is configured: Lock after inactivity - set it to Off, or to a longer interval, if a 1- or 5-minute timeout is catching you while you…"
  },
  {
    "title": "App lock",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "The lock fired later than the timeout I set",
    "anchor": "lock-late",
    "body": "You picked 1 minute but it took closer to 75 seconds. Expected. The idle deadline is re-checked periodically rather than driven by one long timer, so the lock lands up to 15 seconds after the interval. Erring late is deliberate: a timer that fires early on a throttled or suspended window is the worse failure. A…"
  },
  {
    "title": "App lock",
    "url": "pages/troubleshooting/app-lock.html",
    "heading": "Loach opened without asking for my PIN",
    "anchor": "no-lock-screen",
    "body": "A lock is configured, but Loach started straight into your chats. At launch Loach asks the OS credential store whether a lock is set. If that check fails or gets no answer within 5 seconds - no Secret Service running on Linux, or a keyring still waiting to be unlocked - Loach starts unlocked rather than stranding you…"
  },
  {
    "title": "Models editor",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "Models editor",
    "anchor": "",
    "body": "The Models tab is a UI over the Ollama HTTP API. Most issues here are validation in the editor or something on the Ollama side: an unreachable server, a stalled download, or an error Ollama returns."
  },
  {
    "title": "Models editor",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "“Save as new model” rejects my Modelfile",
    "anchor": "save-as-rejected",
    "body": "Saving a derived model fails with a validation error. The editor refuses Modelfiles that could smuggle extra directives. The Base model (FROM) tag must only contain letters, digits,., _, /, or -, plus one: before the tag (so llama3.1:8b and a Hugging Face pull such as hf.co/user/repo:Q4_K_M are fine). No spaces, no…"
  },
  {
    "title": "Models editor",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "A model pull is stuck",
    "anchor": "pull-stuck",
    "body": "The progress chip is hanging at the same percentage. Click the ✕ on the progress chip and start the pull again. Ollama keeps the layers it already fetched, so the new pull picks up from there. Confirm Ollama is still reachable - when it isn’t, the model picker in the chat header shows an amber warning next to Ollama…"
  },
  {
    "title": "Models editor",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "Can’t delete a model",
    "anchor": "cant-delete",
    "body": "Delete fails with a Couldn’t delete model toast. The toast quotes Ollama’s own error - Loach never blocks a delete itself. Check that Ollama is still reachable (the chat-header model picker shows an amber warning and “Not running” when it isn’t) and that the tag matches what ollama list shows, then retry from the…"
  },
  {
    "title": "Models editor",
    "url": "pages/troubleshooting/models-editor.html",
    "heading": "My Thinking preference for a model was forgotten",
    "anchor": "thinking-pref-reset",
    "body": "You set Allow thinking step in the Models editor, and after restarting Loach the model is back to its own default. That per-model preference is kept only until Loach restarts. For a lasting choice, flip the Thinking toggle in a chat’s parameters panel - that one is saved with the chat - or set the default for every…"
  },
  {
    "title": "Updates",
    "url": "pages/troubleshooting/updates.html",
    "heading": "Updates",
    "anchor": "",
    "body": "Loach’s built-in updater patches every install format in place. When it doesn’t offer to, the cause is usually an old build, a development build, release timing, or the auto-check being off."
  },
  {
    "title": "Updates",
    "url": "pages/troubleshooting/updates.html",
    "heading": "No “Install update” button on Linux",
    "anchor": "no-install-button-linux",
    "body": "You’re on Linux and the Updates panel only says in-app updates aren’t available for this install, with an Open releases button. All three Linux formats - AppImage, .deb and .rpm - support in-app updates, so the panel should offer one. Two things hide it: You installed v1.2.3 or earlier from a .deb or .rpm. That…"
  },
  {
    "title": "Updates",
    "url": "pages/troubleshooting/updates.html",
    "heading": "The update asks for my password on Linux",
    "anchor": "linux-password-prompt",
    "body": "Installing an update on a .deb / .rpm install pops a system authentication prompt. Expected. Replacing a package-managed install means running dpkg -i / rpm -U as root, which Loach requests through pkexec (falling back to zenity or kdialog plus sudo ). Going around the package manager instead would leave its database…"
  },
  {
    "title": "Updates",
    "url": "pages/troubleshooting/updates.html",
    "heading": "“You’re on the latest version” but I see a newer version on GitHub",
    "anchor": "stale-up-to-date",
    "body": "The updater says there’s nothing new even though a newer release exists. The updater only sees the newest published stable release. Drafts aren’t offered, and neither are pre-releases (versions with a suffix such as -beta-1 or -rc-1) - download those from GitHub."
  },
  {
    "title": "Updates",
    "url": "pages/troubleshooting/updates.html",
    "heading": "No “Update available” notice at launch",
    "anchor": "no-launch-notice",
    "body": "A new version is out, but Loach never tells you when it starts. The launch check is off by default. Switch on Auto-check for updates in Settings → Updates. It takes effect from the next launch, not straight away. The check is deliberately quiet: there’s no notice when you’re up to date, and a check that fails…"
  },
  {
    "title": "Updates",
    "url": "pages/troubleshooting/updates.html",
    "heading": "I can’t cancel an update that’s downloading",
    "anchor": "cant-cancel",
    "body": "The Update available dialog won’t close, or the Updates panel has no way to stop the download. By design. Once you pick Update now or Install update, the download can’t be stopped, and Loach restarts on its own when the update is installed - closing the dialog would only let the restart catch you by surprise. If…"
  },
  {
    "title": "Updates",
    "url": "pages/troubleshooting/updates.html",
    "heading": "Update download or signature fails",
    "anchor": "signature-fail",
    "body": "The update starts but errors out before installing, showing Update failed: and a reason. Click Try again - transient network failures are common. If the error mentions signature verification, the downloaded file didn’t match what the release signed - usually a corrupted or intercepted download (a proxy or antivirus…"
  },
  {
    "title": "Data, import & export",
    "url": "pages/troubleshooting/data.html",
    "heading": "Data, import & export",
    "anchor": "",
    "body": "Loach distinguishes between per-chat context exports, full backups, partial wipes and full resets. Mixing them up is the most common source of confusion."
  },
  {
    "title": "Data, import & export",
    "url": "pages/troubleshooting/data.html",
    "heading": "Import won’t accept my JSON file",
    "anchor": "import-rejected",
    "body": "“Import data” rejects the file you picked. Import data expects a full Loach backup - the JSON produced by Settings → Data → Export data. The per-chat Export context Markdown is not an import source; paste it into another chat with Import context instead. The error says which check failed: file doesn’t look like a…"
  },
  {
    "title": "Data, import & export",
    "url": "pages/troubleshooting/data.html",
    "heading": "Something is missing after restoring a backup",
    "anchor": "after-import",
    "body": "The import succeeded, but an MCP server is off or can’t authenticate, or a chat lost its folder. Backups leave out anything secret or tied to one machine: MCP credentials. HTTP headers, stdio environment variables, and passwords or tokens in command-line arguments are scrubbed on export. Re-enter them in Settings →…"
  },
  {
    "title": "Data, import & export",
    "url": "pages/troubleshooting/data.html",
    "heading": "“Remove my data” didn’t remove my OpenAI key",
    "anchor": "wipe-keeps-key",
    "body": "After erasing, your OpenAI-compatible API key is still configured. By design. Remove my data (under Settings → Data → Erase & Reset) removes chats, folders, Spaces, Snippets, snippet variables, MCP servers and memories, but keeps app settings, your stored API key and the app lock. To clear everything, including the…"
  },
  {
    "title": "Data, import & export",
    "url": "pages/troubleshooting/data.html",
    "heading": "The database is still large after deleting chats",
    "anchor": "db-not-shrinking",
    "body": "The Database size in Settings → Data didn’t go down after you deleted or erased chats. Expected. SQLite keeps the space it frees and reuses it for new data instead of shrinking the file, so the on-disk total doesn’t drop. The lines under it - Chats, Attachments, Spaces, Other - measure what is actually stored, and…"
  },
  {
    "title": "Appearance & window",
    "url": "pages/troubleshooting/appearance.html",
    "heading": "Appearance & window",
    "anchor": "",
    "body": "Most visual oddities trace back to GPU compositing, an OS setting, or the OS owning a piece of chrome that Loach can’t restyle. See Themes for the settings themselves."
  },
  {
    "title": "Appearance & window",
    "url": "pages/troubleshooting/appearance.html",
    "heading": "Aurora theme tears or stutters",
    "anchor": "aurora-tearing",
    "body": "The background or the translucent panels flicker or drop frames while you scroll or resize. Switch to the Solid theme in Settings → Appearance. Aurora’s background is a static gradient under a large blur, and its translucent panels blur whatever is behind them - all GPU compositing that integrated GPUs and remote…"
  },
  {
    "title": "Appearance & window",
    "url": "pages/troubleshooting/appearance.html",
    "heading": "Font size change didn’t fully apply",
    "anchor": "partial-font-scale",
    "body": "Some text scaled, some didn’t. Native dialogs (file pickers, save dialogs, the prompt that confirms a local MCP server before it starts) follow the OS font scale, not Loach’s. Everything Loach draws itself, the title bar included, follows the in-app setting - apart from a few fixed sizes: the onboarding step titles…"
  },
  {
    "title": "Appearance & window",
    "url": "pages/troubleshooting/appearance.html",
    "heading": "Nothing animates",
    "anchor": "no-animations",
    "body": "Spinners, the “typing” dots and menu transitions sit still. Your OS is set to reduce motion, and Loach honours it. Turn animation effects back on in your OS accessibility settings if you want them."
  },
  {
    "title": "Appearance & window",
    "url": "pages/troubleshooting/appearance.html",
    "heading": "The sidebar collapsed on its own",
    "anchor": "sidebar-collapsed",
    "body": "You opened the code canvas or the parameters panel and the chat list folded down to a strip of icons. Expected on windows narrower than 1080 px: the sidebar gets out of the way so the transcript keeps a usable width, and comes back when the right-hand panel closes. Press Ctrl + Shift + S (or click the sidebar toggle)…"
  },
  {
    "title": "Search palette",
    "url": "pages/troubleshooting/search-palette.html",
    "heading": "Search palette",
    "anchor": "",
    "body": "The search shortcuts are intentionally suppressed in a few modal contexts, and message search deliberately skips a few kinds of content."
  },
  {
    "title": "Search palette",
    "url": "pages/troubleshooting/search-palette.html",
    "heading": "Ctrl+K does nothing",
    "anchor": "shortcut-dead",
    "body": "The shortcut doesn’t open the global search. The palette is suppressed while the onboarding wizard, the lock screen or Private Chat owns the window - the title-bar search pill is disabled or hidden then too. Finish onboarding, unlock the app or close Private Chat first."
  },
  {
    "title": "Search palette",
    "url": "pages/troubleshooting/search-palette.html",
    "heading": "Search doesn’t find a phrase I know I wrote",
    "anchor": "phrase-not-found",
    "body": "You remember the wording, but the palette returns nothing - or only chat titles. Message search covers live transcripts, and deliberately skips several things: Archived chats. The archive has no search of its own - unarchive the chat from Settings → Archive to bring it back into scope. Private Chat. It never writes…"
  },
  {
    "title": "Search palette",
    "url": "pages/troubleshooting/search-palette.html",
    "heading": "Ctrl+F does nothing",
    "anchor": "find-dead",
    "body": "The in-chat finder doesn’t open. The finder searches the open chat’s transcript, so it needs a chat with at least one message on screen - nothing happens on a new, empty chat or while the Spaces, Snippets or Models view is showing. Like the palette, it’s unavailable in Private Chat, during onboarding and behind the…"
  },
  {
    "title": "Platform",
    "url": "pages/troubleshooting/platform.html",
    "heading": "Platform",
    "anchor": "",
    "body": "A few problems are specific to a particular operating system or IT policy."
  },
  {
    "title": "Platform",
    "url": "pages/troubleshooting/platform.html",
    "heading": "macOS - “Loach is damaged and can’t be opened” on first launch",
    "anchor": "macos-gatekeeper",
    "body": "macOS refuses to open the app after install, showing either “Loach is damaged and can’t be opened” or “Apple cannot verify Loach is free of malware”. The macOS build is not Apple-notarized (ZTCS doesn’t subscribe to the Apple Developer Program), so Gatekeeper blocks it on first launch. Bypass it once and the app runs…"
  },
  {
    "title": "Platform",
    "url": "pages/troubleshooting/platform.html",
    "heading": "macOS - Intel Macs",
    "anchor": "macos-intel",
    "body": "You’re on an Intel Mac and the .dmg won’t install or run. The macOS build is Apple Silicon (M-series) only, and needs macOS 11 or later. Intel Macs aren’t supported. Build from source if you need to run on Intel - see Build from source."
  },
  {
    "title": "Platform",
    "url": "pages/troubleshooting/platform.html",
    "heading": "Linux - the app won’t start on an older distribution",
    "anchor": "linux-glibc",
    "body": "Launching Loach fails with an error such as version `GLIBC_2.35' not found. Loach’s Linux packages are built against glibc 2.35, so Ubuntu 22.04 and Debian 12 are the oldest supported distributions; anything with an older glibc can’t run the pre-built .deb, .rpm or .AppImage. Upgrade the distribution, or build from…"
  },
  {
    "title": "Platform",
    "url": "pages/troubleshooting/platform.html",
    "heading": "Windows - saving a key or the app lock fails on a managed machine",
    "anchor": "windows-credman",
    "body": "Saving keys or app-lock credentials fails on a managed Windows machine with a platform or storage error. Some corporate group policies block apps from writing to Credential Manager. Loach cannot store secrets without it. Ask your IT admin to allow Credential Manager writes for the Loach process, or use a personal…"
  }
]
;
