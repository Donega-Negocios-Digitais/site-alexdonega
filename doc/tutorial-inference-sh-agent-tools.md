# Tutorial Completo: inference.sh Agent Tools

> **78 Skills para IA Generativa** — Imagens, vídeos, áudio, redes sociais, LLMs e muito mais, tudo acessível via CLI por agentes como Claude Code.

---

## Sumário

1. [Introdução](#1-introdução)
2. [Pré-requisitos e Instalação](#2-pré-requisitos-e-instalação)
3. [Como o CLI Funciona](#3-como-o-cli-funciona)
4. [Geração de Imagens](#4-geração-de-imagens)
5. [Geração de Vídeo](#5-geração-de-vídeo)
6. [Remotion — Vídeos Animados com React](#6-remotion--vídeos-animados-com-react)
7. [Áudio e Fala](#7-áudio-e-fala)
8. [Automação de Twitter/X](#8-automação-de-twitterx)
9. [LLMs e Web Search](#9-llms-e-web-search)
10. [Ferramentas Utilitárias](#10-ferramentas-utilitárias)
11. [SDKs — JavaScript e Python](#11-sdks--javascript-e-python)
12. [Construindo Seus Próprios Apps](#12-construindo-seus-próprios-apps)
13. [Workflows Completos](#13-workflows-completos)
14. [Referência Rápida](#14-referência-rápida)

---

## 1. Introdução

### O que é inference.sh?

**inference.sh** é uma plataforma aberta que fornece acesso a **150+ apps de IA generativa** através de um CLI (Command Line Interface) chamado `infsh`. A grande diferença é que esses apps foram **construídos para serem usados por agentes de IA** — Claude Code, Gemini CLI, e outros.

O criador, **Omer**, é um solo founder que alcançou **1M+ de instalações** de suas skills no ecossistema Claude Code. O segredo? Entender que **os agentes são os clientes** — não os humanos.

### O que são Agent Tools (Skills)?

As **Skills** do inference.sh são arquivos `SKILL.md` que ensinam agentes de IA a usar o CLI `infsh`. Cada skill descreve:

- Quais modelos/apps estão disponíveis
- Como chamar cada um via comando de terminal
- Quais parâmetros aceitam (input JSON)
- Workflows que combinam múltiplos apps

Quando você instala uma skill no Claude Code, o agente passa a saber como gerar imagens, vídeos, áudio, postar no Twitter, rodar buscas web, e muito mais — tudo executando comandos `infsh`.

### Skills vs MCPs: Por que Skills são melhores?

| Aspecto | MCPs (Model Context Protocol) | Skills + CLI |
|---|---|---|
| **Context bloat** | Carrega schemas JSON pesados no contexto a cada interação | Respostas curtas via CLI — contexto preservado |
| **Performance** | Degrada com muitos MCPs conectados | Leve — o agente só carrega a skill quando precisa |
| **Flexibilidade** | Interface fixa via JSON Schema | O CLI pode evoluir independentemente da skill |
| **Composição** | Difícil combinar múltiplos MCPs | Agentes encadeiam comandos CLI naturalmente |

> **A analogia do Omer:** "MCPs carregam muito sangue (JSON) para o agente. Com CLI, a resposta é curta e eficiente — seu context window agradece."

### GEO — Generative Engine Optimization

O termo **GEO** (Generative Engine Optimization) foi cunhado para descrever a estratégia de otimizar conteúdo para ser encontrado por **motores de busca generativos** (agentes de IA).

Omer aplicou isso ao otimizar as descriptions das skills com as palavras-chave que **outros agentes usariam para buscar**. Exemplo: a skill de image generation inclui triggers como `flux`, `image generation`, `text-to-image`, `ai art` — exatamente o que um agente digitaria ao procurar essa funcionalidade.

O resultado: quando um usuário pede ao Claude Code "generate an image", o agente busca no diretório de skills e encontra a skill do inference.sh como melhor match.

---

## 2. Pré-requisitos e Instalação

### Requisitos

- **Conta no inference.sh** (gratuita para começar, pay-per-use)
- **Um agente de IA**: Claude Code (recomendado), Gemini CLI, ou qualquer agente compatível com skills
- **Sistema operacional**: macOS, Linux ou Windows (WSL)

### Passo 1 — Criar conta no inference.sh

1. Acesse [https://inference.sh](https://inference.sh)
2. Clique em **Get Started**
3. Crie sua conta (OAuth com GitHub/Google ou email)
4. Você pode testar todos os apps diretamente pela UI web

### Passo 2 — Instalar o CLI `infsh`

```bash
# macOS / Linux / WSL
curl -fsSL https://cli.inference.sh | sh

# Verificar instalação
infsh version
```

O instalador:
- Detecta seu SO e arquitetura automaticamente
- Baixa o binário de `dist.inference.sh`
- Verifica checksum SHA-256
- Coloca o `infsh` no PATH
- Sem permissões elevadas, sem processos em background, sem telemetry

### Passo 3 — Autenticar

```bash
infsh login
```

Abre o navegador para OAuth. Após autenticar, o CLI salva suas credenciais localmente.

> **Alternativa com API Key:** Se preferir, exporte `INFSH_API_KEY` no ambiente em vez de usar `infsh login`.

### Passo 4 — Instalar as Skills

Você tem **3 opções** de instalação:

#### Opção A — Plugin Claude Code (Recomendado)

```bash
# No Claude Code, execute:
/plugin install inference-sh

# Ou a partir do GitHub:
/plugin marketplace add inference-sh/skills
/plugin install inference-sh@inference-sh-skills
```

Após instalar, as skills ficam disponíveis como slash commands:
- `/inference-sh:flux-image`
- `/inference-sh:google-veo`
- `/inference-sh:elevenlabs-tts`
- etc.

#### Opção B — Skills CLI (`npx skills`)

```bash
# Instalar TODAS as skills do inference.sh
npx skills add inference-sh/skills

# Instalar skills específicas
npx skills add inference-sh/skills@flux-image
npx skills add inference-sh/skills@google-veo
npx skills add inference-sh/skills@llm-models
npx skills add inference-sh/skills@web-search
npx skills add inference-sh/skills@twitter-automation

# Gerenciar
npx skills list                          # Listar instaladas
npx skills search "inference-sh"         # Buscar no registry
npx skills update                        # Atualizar todas
npx skills remove inference-sh/skills@flux-image  # Remover
```

#### Opção C — Manual

```bash
# Clonar o repositório
git clone https://github.com/inference-sh/skills.git

# Copiar para o diretório de skills do Claude
cp -r skills/tools/* ~/.claude/skills/
cp -r skills/ui/* ~/.claude/skills/
cp -r skills/sdk/* ~/.claude/skills/
cp -r skills/guides/* ~/.claude/skills/
```

### Passo 5 — Verificar instalação

No Claude Code, pergunte:

```
Claude, me fale sobre a skill agent-tools.
```

Se estiver funcionando, o agente descreverá as capacidades do inference.sh.

---

## 3. Como o CLI Funciona

### Comandos Principais

```bash
# Listar todos os apps disponíveis
infsh app list

# Filtrar por categoria
infsh app list --category image
infsh app list --category video
infsh app list --category audio
infsh app list --category text
infsh app list --category other

# Buscar apps
infsh app list --search "flux"
infsh app list --search "veo"
infsh app list --search "elevenlabs"

# Apps em destaque ou novos
infsh app list --featured
infsh app list --new

# Ver detalhes de um app (inclui schema de input)
infsh app get falai/flux-dev-lora

# Ver exemplo de input para um app
infsh app sample falai/flux-dev-lora
infsh app sample google/veo-3-1 --save input.json
```

### Executando Apps

```bash
# Input inline (JSON)
infsh app run falai/flux-dev-lora --input '{
  "prompt": "a cyberpunk city at sunset, neon lights, 8k",
  "width": 1024,
  "height": 768
}'

# Input via arquivo JSON
infsh app run falai/flux-dev-lora --input input.json

# Fire-and-forget (não espera terminar)
infsh app run google/veo-3-1 --input input.json --no-wait

# Executar função específica (apps com múltiplas funções)
infsh app run x/post-tweet --function create --input '{"text": "Hello world!"}'

# Sessões (estado entre múltiplas chamadas)
infsh app run meu-app --input '{"step": 1}' --session new
infsh app run meu-app --input '{"step": 2}' --session <id-retornado>
```

### Verificando Resultados

```bash
# Verificar status de uma task
infsh task get <task-id>

# Resultado inclui URL do arquivo gerado, status, e metadados
```

### Convenção de App IDs

Todos os apps seguem o formato:

```
namespace/app-name@version
```

Exemplos:
- `falai/flux-dev-lora` — FLUX Dev LoRA da FAL
- `google/veo-3-1-fast` — Veo 3.1 Fast do Google
- `openrouter/claude-sonnet-45` — Claude Sonnet 4.5 via OpenRouter
- `elevenlabs/tts-multilingual-v2` — ElevenLabs TTS

### Auto-upload de Arquivos

Qualquer campo de input que aceite URL também aceita **caminho de arquivo local**. O CLI faz o upload automaticamente:

```bash
infsh app run google/veo-2 --input '{
  "prompt": "animate this image",
  "image": "./minha-imagem.png"
}'
```

### Outros Comandos Úteis

```bash
infsh me          # Mostrar usuário atual
infsh update      # Atualizar CLI
infsh version     # Versão do CLI

# Completions de shell (Bash, Zsh, Fish)
infsh completion bash > ~/.infsh-completion.bash
source ~/.infsh-completion.bash
```

---

## 4. Geração de Imagens

### Visão Geral — 50+ Modelos

A skill `ai-image-generation` dá acesso a mais de 50 modelos de geração de imagens. Aqui estão os principais:

| Modelo | App ID | Características | Preço |
|---|---|---|---|
| **FLUX Dev LoRA** | `falai/flux-dev-lora` | Mais alta qualidade, LoRA styles | $$$ |
| **FLUX.2 Klein LoRA** | `falai/flux-2-klein-lora` | Mais rápido, bom custo-benefício | $$ |
| **FLUX Klein 4B** | `falai/flux-klein-4b` | Ultra barato ($0.0001/img) | $ |
| **Gemini 3 Pro Image** | `google/gemini-3-pro-image` | Alta qualidade, multimodal | $$ |
| **Gemini 2.5 Flash** | `google/gemini-2.5-flash` | Rápido, bom custo-benefício | $ |
| **Grok Imagine** | `xai/grok-imagine` | Múltiplos aspect ratios | $$ |
| **Seedream 4.5** | `bytedance/seedream-4-5` | Cinematic 2K-4K | $$ |
| **Seedream 3.0** | `bytedance/seedream-3-0` | Text rendering forte | $$ |
| **Reve** | `reve/reve` | Edição em linguagem natural | $$ |
| **ImagineArt 1.5 Pro** | `imagineart/1-5-pro` | Ultra-fidelidade 4K | $$$ |
| **Pruna P-Image** | `pruna/p-image` | Rápido, econômico, LoRA presets | $ |
| **Qwen Image 2 Pro** | `qwen/qwen-image-2-pro` | Alta qualidade | $$ |
| **Qwen Image 2** | `qwen/qwen-image-2` | Rápido | $ |
| **Nano Banana 2** | `falai/nano-banana-2` | Criativo, estilizado | $$ |
| **Nano Banana** | `falai/nano-banana` | Estilos artísticos | $$ |

### Instalar as Skills de Imagem

```bash
# Skill completa (todos os modelos)
npx skills add inference-sh/skills@ai-image-generation

# Skills individuais
npx skills add inference-sh/skills@flux-image
npx skills add inference-sh/skills@nano-banana-2
npx skills add inference-sh/skills@background-removal
npx skills add inference-sh/skills@image-upscaling
```

### Exemplos de Uso no Claude Code

Depois de instalar a skill, basta pedir ao Claude Code:

```
Gere uma imagem de um samurai cyberpunk em um jardim japonês futurista, estilo 8k cinematic.
```

O agente vai:
1. Identificar que a skill `ai-image-generation` é relevante
2. Escolher um modelo apropriado
3. Executar o comando `infsh app run` com o prompt
4. Retornar a imagem gerada

### Comandos Diretos (CLI)

#### FLUX Dev LoRA — Máxima qualidade

```bash
infsh app run falai/flux-dev-lora --input '{
  "prompt": "a majestic dragon flying over a medieval castle at golden hour, cinematic lighting, 8k, photorealistic",
  "width": 1024,
  "height": 1024
}'
```

#### FLUX Klein LoRA — Rápido

```bash
infsh app run falai/flux-2-klein-lora --input '{
  "prompt": "minimalist logo design for a coffee shop called Bean & Brew, warm colors",
  "width": 768,
  "height": 768
}'
```

#### Gemini 3 Pro Image

```bash
infsh app run google/gemini-3-pro-image --input '{
  "prompt": "photograph of a Brazilian beach at sunset with palm trees, golden light, professional photography",
  "width": 1024,
  "height": 768
}'
```

#### Seedream 4.5 — Cinematic 2K-4K

```bash
infsh app run bytedance/seedream-4-5 --input '{
  "prompt": "epic space battle with nebula background, cinematic, ultra detailed, 4k",
  "width": 2048,
  "height": 1152
}'
```

#### Grok Imagine

```bash
infsh app run xai/grok-imagine --input '{
  "prompt": "a cat wearing sunglasses riding a skateboard, fun style",
  "aspect_ratio": "16:9"
}'
```

### Image-to-Image (Edição)

Alguns modelos suportam edição de imagem:

```bash
# FLUX Dev LoRA com LoRA style + imagem de referência
infsh app run falai/flux-dev-lora --input '{
  "prompt": "make it look like a watercolor painting",
  "image": "./foto-original.jpg",
  "strength": 0.7
}'
```

### Background Removal

```bash
npx skills add inference-sh/skills@background-removal

infsh app run birefnet/background-removal --input '{
  "image": "./foto-com-fundo.jpg"
}'
# Retorna imagem com fundo transparente (PNG)
```

### Image Upscaling

```bash
npx skills add inference-sh/skills@image-upscaling

# Topaz Upscaler
infsh app run topaz/image-upscaler --input '{
  "image": "./imagem-baixa-res.jpg",
  "scale": 4
}'

# Real-ESRGAN (alternativa open source)
infsh app run real-esrgan/upscaler --input '{
  "image": "./imagem-baixa-res.jpg",
  "scale": 4
}'
```

### Dicas para Prompts de Imagem

- **Seja específico**: "cyberpunk city at sunset, neon lights reflecting in puddles, 8k, cinematic"
- **Especifique estilo**: "oil painting", "watercolor", "photograph", "digital art", "3D render"
- **Especifique iluminação**: "golden hour", "studio lighting", "dramatic shadows"
- **Especifique resolução**: "8k", "ultra detailed", "photorealistic"
- **Use referências culturais**: "in the style of Studio Ghibli", "inspired by Blade Runner"

---

## 5. Geração de Vídeo

### Visão Geral — 40+ Modelos

| Modelo | App ID | Tipo | Características |
|---|---|---|---|
| **Veo 3.1** | `google/veo-3-1` | Text-to-Video | Mais recente, com áudio |
| **Veo 3.1 Fast** | `google/veo-3-1-fast` | Text-to-Video | Versão rápida do 3.1 |
| **Veo 3** | `google/veo-3` | Text-to-Video | Alta qualidade |
| **Veo 3 Fast** | `google/veo-3-fast` | Text-to-Video | Rápido |
| **Veo 2** | `google/veo-2` | Text-to-Video | Com áudio |
| **Seedance 1.5 Pro** | `bytedance/seedance-1-5-pro` | Text-to-Video | First-frame control |
| **Seedance 1.0 Pro** | `bytedance/seedance-1-0-pro` | Text-to-Video | First-frame control |
| **Wan 2.5** | `bytedance/wan-2-5` | Text-to-Video | Alta qualidade |
| **Wan 2.5 I2V** | `bytedance/wan-2-5-i2v` | Image-to-Video | Animação de imagem |
| **OmniHuman 1.5** | `bytedance/omnihuman-1-5` | Avatar | Multi-personagem |
| **OmniHuman 1.0** | `bytedance/omnihuman-1-0` | Avatar | Personagem único |
| **Fabric 1.0** | `bytedance/fabric-1-0` | Lip-sync | Simulação de tecido |
| **PixVerse** | `pixverse/lipsync` | Lip-sync | Lip sync |
| **Grok Video** | `xai/grok-video` | Text-to-Video | Duração configurável |
| **Pruna P-Video** | `pruna/p-video` | Text-to-Video | Econômico |
| **WAN-T2V** | `wan/t2v` | Text-to-Video | Open source |

### Instalar as Skills de Vídeo

```bash
# Skill completa (todos os modelos)
npx skills add inference-sh/skills@ai-video-generation

# Skills individuais
npx skills add inference-sh/skills@google-veo
npx skills add inference-sh/skills@image-to-video
npx skills add inference-sh/skills@ai-avatar-video
npx skills add inference-sh/skills@remotion-render
npx skills add inference-sh/skills@p-video
```

### Text-to-Video

#### Veo 3.1 (Google) — Mais recente

```bash
infsh app run google/veo-3-1 --input '{
  "prompt": "A drone shot flying over Rio de Janeiro at sunset, Christ the Redeemer visible in the distance, cinematic 4k",
  "duration": 8
}'
```

#### Seedance 1.5 Pro (ByteDance) — Com controle de primeiro frame

```bash
# Text-to-video com controle do primeiro frame
infsh app run bytedance/seedance-1-5-pro --input '{
  "prompt": "camera slowly zooms into a cozy cafe interior, steam rising from coffee cups",
  "first_frame_image": "./primeiro-frame.jpg",
  "duration": 5
}'
```

### Image-to-Video — Animar imagens estáticas

```bash
# Wan 2.5 I2V
infsh app run bytedance/wan-2-5-i2v --input '{
  "prompt": "gentle wind blowing through hair, subtle movement",
  "image": "./retrato-estatico.jpg",
  "duration": 4
}'
```

### Avatares com Lip Sync

#### OmniHuman — Avatares realistas

```bash
# Avatar com lip-sync (personagem único)
infsh app run bytedance/omnihuman-1-0 --input '{
  "image": "./foto-personagem.jpg",
  "audio": "./fala-voz.mp3"
}'

# Avatar com múltiplos personagens
infsh app run bytedance/omnihuman-1-5 --input '{
  "image": "./cena-multipla.jpg",
  "audio": "./dialogo.mp3"
}'
```

#### PixVerse — Lip Sync alternativo

```bash
infsh app run pixverse/lipsync --input '{
  "image": "./personagem.jpg",
  "audio": "./fala.mp3"
}'
```

### Stitch Videos — Juntar clipes

```bash
# Juntar múltiplos vídeos com transições
infsh app run inference/stitch-videos --input '{
  "videos": ["./clip1.mp4", "./clip2.mp4", "./clip3.mp4"],
  "transition": "fade",
  "transition_duration": 0.5
}'
```

### Adicionar Som ao Vídeo (Foley)

```bash
infsh app run hunyuanvideo/foley --input '{
  "video": "./video-sem-som.mp4"
}'
# Gera trilha sonora automática baseada no conteúdo visual
```

### Topaz Video Upscaler

```bash
infsh app run topaz/video-upscaler --input '{
  "video": "./video-720p.mp4",
  "scale": 2
}'
# Upscale de 720p para 1440p (ou 1080p para 4K)
```

---

## 6. Remotion — Vídeos Animados com React

### O que é Remotion?

**Remotion** é um framework que permite criar vídeos programaticamente com React. O inference.sh tem um renderer que converte código React/Remotion (TSX) em vídeo MP4 — e seu agente pode escrever esse código e renderizar automaticamente.

### Instalar a Skill

```bash
npx skills add inference-sh/skills@remotion-render
```

### Como Funciona

1. O agente escreve código Remotion em TSX
2. Passa o código para o app `remotion-render`
3. O app renderiza o vídeo e retorna o MP4

### APIs Disponíveis do Remotion

| API | Descrição |
|---|---|
| `useCurrentFrame()` | Frame atual da animação |
| `useVideoConfig()` | Configurações do vídeo (FPS, duração) |
| `spring()` | Animação spring natural |
| `interpolate()` | Interpolação de valores entre frames |
| `AbsoluteFill` | Container que preenche todo o frame |
| `Sequence` | Agrupa elementos em sequência temporal |
| `Audio` | Adiciona áudio ao vídeo |
| `Video` | Incorpora vídeo existente |
| `Img` | Incorpora imagem |

### Exemplo — Vídeo Animado com Texto e Imagem

```bash
infsh app run inference/remotion-render --input '{
  "tsx_code": "import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Img } from \"remotion\";\n\nexport const RemotionRoot = () => {\n  const frame = useCurrentFrame();\n  const { fps, durationInFrames } = useVideoConfig();\n  \n  const titleOpacity = spring({ frame, from: 0, to: 1, config: { damping: 200 } });\n  const titleY = interpolate(frame, [0, 30], [100, 0], { extrapolateRight: \"clamp\" });\n  \n  const imageScale = spring({ frame: 20, from: 0.8, to: 1, config: { damping: 100 } });\n  \n  return (\n    <AbsoluteFill style={{ backgroundColor: \"#0f0f0f\" }}>\n      <div style={{\n        opacity: titleOpacity,\n        transform: `translateY(${titleY}px)`,\n        textAlign: \"center\",\n        marginTop: 80,\n      }}>\n        <h1 style={{ color: \"#ffffff\", fontSize: 64, fontWeight: \"bold\" }}>\n          Meu Vídeo Incrível\n        </h1>\n        <p style={{ color: \"#aaaaaa\", fontSize: 28, marginTop: 20 }}>\n          Criado com Claude Code + inference.sh\n        </p>\n      </div>\n      <Img\n        src=\"https://example.com/minha-imagem.jpg\"\n        style={{\n          position: \"absolute\",\n          bottom: 100,\n          left: \"50%\",\n          transform: `translateX(-50%) scale(${imageScale})`,\n          width: 600,\n          borderRadius: 20,\n        }}\n      />\n    </AbsoluteFill>\n  );\n};",
  "width": 1920,
  "height": 1080,
  "fps": 30,
  "duration_in_frames": 90,
  "codec": "h264"
}'
```

### Exemplo no Claude Code

```
Crie um vídeo Remotion de 10 segundos (30fps, 1920x1080) com:
- Cena 1 (0-3s): Título "Bem-vindo" aparece com animação spring
- Cena 2 (3-7s): Uma imagem de robô aparece no centro com zoom
- Cena 3 (7-10s): Texto "Powered by AI" fade out

Renderize usando o remotion-render do inference.sh.
```

### Configurações Disponíveis

| Parâmetro | Opções | Padrão |
|---|---|---|
| `width` | Qualquer número | 1920 |
| `height` | Qualquer número | 1080 |
| `fps` | 24, 30, 60 | 30 |
| `duration_in_frames` | Qualquer número | 150 (5s) |
| `codec` | `h264`, `h265`, `vp8`, `vp9` | `h264` |

---

## 7. Áudio e Fala

### Visão Geral

O inference.sh oferece uma suite completa de áudio:

| Categoria | Modelos | App IDs |
|---|---|---|
| **Text-to-Speech** | Kokoro, DIA, Chatterbox, Higgs, VibeVoice | `inference/kokoro`, `inference/dia`, etc. |
| **ElevenLabs TTS** | 22+ vozes, 32 idiomas | `elevenlabs/tts-multilingual-v2`, `elevenlabs/tts-turbo-v2-5` |
| **Speech-to-Text** | Whisper V3, Fast Whisper, ElevenLabs Scribe | `openai/whisper-v3`, `elevenlabs/scribe-v2` |
| **Voice Cloning** | Geração de voz personalizada | `elevenlabs/voice-generation` |
| **Dubbing** | 29 idiomas com preservação de voz | `elevenlabs/dubbing` |
| **Sound Effects** | Text-to-SFX | `elevenlabs/sound-effects` |
| **Music** | ElevenLabs Music, Diffrythm, Tencent Song | `elevenlabs/music`, `diffrythm/generate` |
| **Voice Changer** | Transformação de voz | `elevenlabs/voice-changer` |
| **Voice Isolator** | Isolamento de voz de áudio | `elevenlabs/voice-isolator` |

### Instalar as Skills de Áudio

```bash
# Skills individuais
npx skills add inference-sh/skills@text-to-speech
npx skills add inference-sh/skills@speech-to-text
npx skills add inference-sh/skills@ai-voice-cloning
npx skills add inference-sh/skills@ai-music-generation
npx skills add inference-sh/skills@elevenlabs-tts
npx skills add inference-sh/skills@elevenlabs-dubbing
npx skills add inference-sh/skills@elevenlabs-dialogue
npx skills add inference-sh/skills@elevenlabs-sound-effects
npx skills add inference-sh/skills@elevenlabs-music
npx skills add inference-sh/skills@dialogue-audio
```

### Text-to-Speech

#### Kokoro — Natural e rápido

```bash
infsh app run inference/kokoro --input '{
  "text": "Olá! Bem-vindo ao tutorial do inference.sh. Vamos aprender a gerar áudio com agentes de IA.",
  "voice": "bf_emma",
  "speed": 1.0
}'
```

#### ElevenLabs TTS — 22+ vozes premium

```bash
# Modelo Multilingual v2 (mais natural)
infsh app run elevenlabs/tts-multilingual-v2 --input '{
  "text": "This is a premium voice from ElevenLabs, speaking in English with natural intonation.",
  "voice_id": "21m00Tcm4TlvDq8ikWAM",  # Rachel
  "model_id": "eleven_multilingual_v2",
  "stability": 0.5,
  "similarity_boost": 0.75
}'

# Modelo Turbo v2.5 (mais rápido)
infsh app run elevenlabs/tts-turbo-v2-5 --input '{
  "text": "This is the turbo model, optimized for speed.",
  "voice_id": "21m00Tcm4TlvDq8ikWAM"
}'

# Modelo Flash v2.5 (mais barato)
infsh app run elevenlabs/tts-flash-v2-5 --input '{
  "text": "This is the flash model, optimized for cost.",
  "voice_id": "21m00Tcm4TlvDq8ikWAM"
}'
```

#### DIA — Voz conversacional

```bash
infsh app run inference/dia --input '{
  "text": "Ei, tudo bem? Tô aqui pra te ajudar com qualquer coisa.",
  "voice": "default"
}'
```

### Speech-to-Text (Transcrição)

#### Whisper V3

```bash
infsh app run openai/whisper-v3 --input '{
  "audio": "./meu-video.mp4",
  "language": "pt"
}'
# Retorna texto transcrito
```

#### Fast Whisper V3 (mais rápido)

```bash
infsh app run openai/fast-whisper-v3 --input '{
  "audio": "./podcast.mp3",
  "language": "pt"
}'
```

#### ElevenLabs Scribe v2 (98%+ precisão, diarização)

```bash
infsh app run elevenlabs/scribe-v2 --input '{
  "audio": "./entrevista.mp3",
  "language_code": "pt",
  "speaker_labels": true
}'
# Retorna transcrição com identificação de falantes
```

### Dubbing — Dublicar para 29 idiomas

```bash
infsh app run elevenlabs/dubbing --input '{
  "audio": "./video-ingles.mp4",
  "target_language": "pt",
  "preserve_voice": true
}'
# Retorna áudio dublado em português preservando a voz original
```

Idiomas disponíveis incluem: `pt`, `es`, `fr`, `de`, `it`, `ja`, `ko`, `zh`, `ar`, `hi`, `ru` e mais 19.

### Sound Effects (Efeitos Sonoros)

```bash
infsh app run elevenlabs/sound-effects --input '{
  "text": "thunder storm with rain hitting a tin roof",
  "duration_seconds": 5
}'
```

### Music Generation

#### ElevenLabs Music

```bash
infsh app run elevenlabs/music --input '{
  "text": "upbeat electronic dance track with synth pads and driving bass, 128 bpm",
  "duration_seconds": 30
}'
```

#### Diffrythm

```bash
infsh app run diffrythm/generate --input '{
  "prompt": "lo-fi hip hop beat, chill vibes, vinyl crackle",
  "duration": 60
}'
```

### Diálogo Multi-Falante

```bash
infsh app run inference/dia --input '{
  "text": "[Speaker A] Oi, como vai?\n[Speaker B] Tudo ótimo, e com você?\n[Speaker A] Estou bem, obrigado!",
  "voices": ["voice_a", "voice_b"]
}'
```

#### ElevenLabs Dialogue

```bash
infsh app run elevenlabs/dialogue --input '{
  "text": "[narrator] In a world where AI creates everything...\n[character] That sounds amazing!\n[narrator] But there was a catch...",
  "voice_settings": {
    "narrator": { "stability": 0.7 },
    "character": { "stability": 0.3 }
  }
}'
```

### Voice Cloning

```bash
# Primeiro, gerar uma voz a partir de áudio de referência
infsh app run elevenlabs/voice-generation --input '{
  "files": ["./amostra-de-voz.mp3"],
  "description": "Brazilian female voice, warm and friendly"
}'
# Retorna voice_id que pode ser usada no TTS
```

---

## 8. Automação de Twitter/X

### Visão Geral

O inference.sh oferece automação completa do Twitter/X — **sem necessidade do Twitter API Developer** (que custa $100/mês+). Você paga apenas pelo uso via inference.sh.

### Instalar a Skill

```bash
npx skills add inference-sh/skills@twitter-automation
```

### Funcionalidades Disponíveis

| Função | App ID | Descrição |
|---|---|---|
| **Postar tweet** | `x/post-create` | Criar tweet com ou sem mídia |
| **Postar texto** | `x/post-tweet` | Tweet simples |
| **Curtir** | `x/post-like` | Dar like em tweet |
| **Retweetar** | `x/post-retweet` | Retweet |
| **Deletar** | `x/post-delete` | Deletar tweet |
| **Buscar tweet** | `x/post-get` | Buscar tweet por ID |
| **Enviar DM** | `x/dm-send` | Mensagem direta |
| **Seguir** | `x/user-follow` | Seguir usuário |
| **Buscar usuário** | `x/user-get` | Buscar perfil |

### Configuração Inicial

Para usar a automação do Twitter, você precisa conectar sua conta X ao inference.sh. Isso é feito através da plataforma web:

1. Acesse [https://inference.sh](https://inference.sh)
2. Vá em Settings > Integrations
3. Conecte sua conta X/Twitter
4. Após conectar, o CLI terá acesso automático

### Exemplos de Uso

#### Postar tweet simples

```bash
infsh app run x/post-tweet --input '{
  "text": "Acabei de criar um vídeo inteiro usando apenas Claude Code e inference.sh. O futuro é agora! 🚀"
}'
```

#### Postar tweet com imagem

```bash
# Primeiro, gere uma imagem
infsh app run falai/flux-dev-lora --input '{
  "prompt": "futuristic city with flying cars, neon lights, cyberpunk style"
}' --save-image ./tweet-image.png

# Depois, poste com a imagem
infsh app run x/post-create --input '{
  "text": "Minha visão do futuro da cidade. Gerado com IA! 🤖",
  "media": "./tweet-image.png"
}'
```

#### Postar tweet com vídeo

```bash
infsh app run x/post-create --input '{
  "text": "Vídeo gerado com Veo 3.1 via Claude Code. Impressionante! 🎬",
  "media": "./meu-video.mp4"
}'
```

#### Curtir e retweetar

```bash
# Curtir
infsh app run x/post-like --input '{
  "post_id": "1234567890"
}'

# Retweetar
infsh app run x/post-retweet --input '{
  "post_id": "1234567890"
}'
```

#### Enviar DM

```bash
infsh app run x/dm-send --input '{
  "user_id": "123456789",
  "text": "Olá! Vi seu trabalho e gostaria de colaborar."
}'
```

### Exemplo no Claude Code — Workflow Completo

```
Claude, faça o seguinte:
1. Gere uma imagem criativa de um robô aprendendo a programar
2. Poste essa imagem no meu Twitter com o texto "Quando seu agente de IA aprende a programar sozinho 🤖💻 #AI #ClaudeCode"
3. Mencione @claude no tweet
```

O agente vai:
1. Usar a skill de image generation para criar a imagem
2. Usar a skill de twitter-automation para postar
3. Executar tudo automaticamente

---

## 9. LLMs e Web Search

### LLMs via OpenRouter

Use qualquer modelo LLM como ferramenta do seu agente — Claude, Gemini, GPT, e mais de 100 modelos.

#### Instalar a Skill

```bash
npx skills add inference-sh/skills@llm-models
```

#### Modelos Disponíveis

| Modelo | App ID | Provider |
|---|---|---|
| Claude Opus 4.5 | `openrouter/claude-opus-45` | Anthropic |
| Claude Sonnet 4.5 | `openrouter/claude-sonnet-45` | Anthropic |
| Claude Haiku 4.5 | `openrouter/claude-haiku-45` | Anthropic |
| Gemini 3 Pro | `openrouter/gemini-3-pro` | Google |
| GPT-4o | `openrouter/gpt-4o` | OpenAI |
| Kimi K2 Thinking | `openrouter/kimi-k2-thinking` | Moonshot |
| GLM-4.6 | `openrouter/glm-4-6` | Zhipu AI |

> Qualquer modelo disponível no OpenRouter pode ser usado.

#### Exemplos

```bash
# Usar Claude Sonnet como sub-agente
infsh app run openrouter/claude-sonnet-45 --input '{
  "messages": [
    {"role": "system", "content": "Você é um especialista em copywriting."},
    {"role": "user", "content": "Escreva um tweet sobre IA generativa para marketing digital."}
  ],
  "max_tokens": 500
}'
```

### Web Search

#### Instalar a Skill

```bash
npx skills add inference-sh/skills@web-search
```

#### Tavily Search — Busca AI-powered

```bash
# Busca simples
infsh app run tavily/search --input '{
  "query": "melhores ferramentas de IA para marketing digital 2026"
}'

# Tavily Search Assistant (resposta AI completa)
infsh app run tavily/search-assistant --input '{
  "query": "compare inference.sh vs MCP para agentes de IA",
  "max_results": 5
}'
```

#### Tavily Extract — Extrair conteúdo de URLs

```bash
infsh app run tavily/extract --input '{
  "urls": ["https://example.com/artigo-sobre-ia"]
}'
# Retorna o conteúdo limpo das URLs
```

#### Exa Search — Busca neural/semântica

```bash
# Busca semântica
infsh app run exa/search --input '{
  "query": "context engineering for AI agents best practices",
  "num_results": 10
}'

# Exa Answer — Resposta factual direta
infsh app run exa/answer --input '{
  "question": "What is the difference between skills and MCPs for AI agents?"
}'

# Exa Extract — Analisar conteúdo
infsh app run exa/extract --input '{
  "urls": ["https://example.com/article"],
  "query": "key findings about agent skills"
}'
```

### RAG Pipeline — Busca + LLM Combinado

#### Instalar a Skill

```bash
npx skills add inference-sh/skills@ai-rag-pipeline
```

O pipeline RAG combina busca web com LLM para gerar respostas fundamentadas:

```
Claude, pesquise sobre as últimas tendências de IA generativa para marketing
em 2026 e crie um resumo fundamentado com fontes. Use o pipeline RAG do
inference.sh com Tavily search e Claude Sonnet.
```

O agente vai:
1. Buscar no Tavily
2. Extrair conteúdo relevante
3. Passar para o Claude Sonnet com contexto
4. Gerar resposta fundamentada

---

## 10. Ferramentas Utilitárias

### Browser Automation (Playwright)

Automatize navegação web — preenchimento de formulários, scraping, screenshots, gravação de vídeo.

#### Instalar

```bash
npx skills add inference-sh/skills@agent-browser
```

#### Funcionalidades

| Função | Descrição |
|---|---|
| `open` | Abrir URL |
| `snapshot` | Capturar estado da página (DOM) |
| `interact` | Interagir com elementos (click, fill, type) |
| `screenshot` | Tirar screenshot |
| `execute` | Executar JavaScript |
| `close` | Fechar navegador |

#### Sistema de referência `@e`

O agente pode referenciar elementos da página usando `@e`:

```bash
infsh app run inference/agent-browser --input '{
  "action": "open",
  "url": "https://example.com"
}'

infsh app run inference/agent-browser --input '{
  "action": "snapshot"
}'
# Retorna elementos com IDs @e0, @e1, etc.

infsh app run inference/agent-browser --input '{
  "action": "interact",
  "element": "@e5",
  "interaction": "fill",
  "value": "meu@email.com"
}'
```

#### Recursos avançados

- Gravação de vídeo da navegação
- Indicador de cursor visível
- Suporte a proxy
- Sessões persistentes
- Drag and drop, upload de arquivos, scroll

### Python Executor (Sandbox)

Execute código Python em ambiente sandboxed — sem necessidade de instalar nada localmente.

#### Instalar

```bash
npx skills add inference-sh/skills@python-executor
```

#### Especificações

- Python 3.10
- CPU-only
- 8-16GB RAM
- 100+ bibliotecas pré-instaladas

#### Bibliotecas Disponíveis

`numpy`, `pandas`, `matplotlib`, `requests`, `beautifulsoup4`, `selenium`, `playwright`, `moviepy`, `pillow`, `opencv-python`, `trimesh`, `scipy`, `scikit-learn`, `openpyxl`, `reportlab`, e muitas mais.

#### Exemplo

```bash
infsh app run inference/python-executor --input '{
  "code": "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.DataFrame({\"mês\": [\"Jan\", \"Fev\", \"Mar\"], \"vendas\": [100, 150, 200]})\ndf.plot(x=\"mês\", y=\"vendas\", kind=\"bar\")\nplt.savefig(\"outputs/grafico.png\")\nprint(df.describe())"
}'
```

Arquivos salvos em `outputs/` são automaticamente disponibilizados para download.

### Merge de Mídias

```bash
# Juntar vídeo + áudio
infsh app run inference/merge-media --input '{
  "video": "./video-sem-audio.mp4",
  "audio": "./trilha-sonora.mp3"
}'

# Com transição
infsh app run inference/merge-media --input '{
  "videos": ["./parte1.mp4", "./parte2.mp4"],
  "transition": "crossfade",
  "transition_duration": 1.0
}'
```

### Extração de Áudio de Vídeo

```bash
infsh app run inference/extract-audio --input '{
  "video": "./meu-video.mp4"
}'
# Retorna arquivo de áudio extraído
```

### Obter Duração de Mídia

```bash
infsh app run inference/media-duration --input '{
  "file": "./meu-video.mp4"
}'
# Retorna duração em segundos
```

### Caption de Vídeo (Legendas)

```bash
infsh app run inference/caption-video --input '{
  "video": "./video.mp4",
  "text": "Legenda que aparece no vídeo",
  "position": "bottom",
  "font_size": 24
}'
```

### Vídeo em Loop

```bash
infsh app run inference/video-loop --input '{
  "video": "./clipe-curto.mp4",
  "loops": 3
}'
```

### HTML para Imagem (Slides)

```bash
infsh app run inference/html-to-image --input '{
  "html": "<html><body style=\"background:#1a1a2e;display:flex;align-items:center;justify-content:center;height:100vh\"><h1 style=\"color:#e94560;font-family:sans-serif;font-size:72px\">Slide Title</h1></body></html>",
  "width": 1920,
  "height": 1080
}'
```

---

## 11. SDKs — JavaScript e Python

### JavaScript/TypeScript SDK

#### Instalar

```bash
npm install @inferencesh/sdk
```

#### Uso Básico

```typescript
import { inference } from '@inferencesh/sdk';

const client = inference({ apiKey: process.env.INFSH_API_KEY });

// Gerar imagem
const result = await client.run('falai/flux-dev-lora', {
  prompt: 'a beautiful sunset over the ocean',
  width: 1024,
  height: 768,
});
console.log(result.url);
```

#### Upload de Arquivos

```typescript
// Upload automático de caminhos locais
const result = await client.run('bytedance/wan-2-5-i2v', {
  prompt: 'animate this image with gentle motion',
  image: './minha-imagem.png', // auto-upload
});
```

#### Streaming

```typescript
const stream = await client.run('openrouter/claude-sonnet-45', {
  messages: [{ role: 'user', content: 'Tell me a story' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk);
}
```

#### Sessions (Estado entre chamadas)

```typescript
const session = await client.run('meu-app', {
  query: 'primeira pergunta',
}, { session: 'new' });

const response2 = await client.run('meu-app', {
  query: 'segue do contexto anterior',
}, { session: session.sessionId });
```

#### Agent SDK

```typescript
const agent = client.agent({
  model: 'openrouter/claude-sonnet-45',
  tools: ['falai/flux-dev-lora', 'google/veo-3-1'],
});

const result = await agent.run('Crie uma imagem de um gato e gere um vídeo dele');
```

#### Server Proxy (Next.js, Express, Hono, etc.)

```typescript
// next.js/api/inference/route.ts
import { inference } from '@inferencesh/sdk';

const client = inference({ apiKey: process.env.INFSH_API_KEY });

export async function POST(request: Request) {
  const { app, input } = await request.json();
  const result = await client.run(app, input);
  return Response.json(result);
}
```

### Python SDK

#### Instalar

```bash
pip install inferencesh
```

#### Uso Básico

```python
from inferencesh import inference

client = inference(api_key="sua-api-key")

# Gerar imagem
result = client.run("falai/flux-dev-lora", {
    "prompt": "a beautiful sunset over the ocean",
    "width": 1024,
    "height": 768,
})
print(result.url)
```

#### Async Support

```bash
pip install inferencesh[async]
```

```python
import asyncio
from inferencesh import async_inference

async def main():
    client = async_inference(api_key="sua-api-key")
    result = await client.run("falai/flux-dev-lora", {
        "prompt": "a beautiful sunset over the ocean",
    })
    print(result.url)

asyncio.run(main())
```

#### Streaming

```python
async for chunk in client.run("openrouter/claude-sonnet-45", {
    "messages": [{"role": "user", "content": "Tell me a story"}],
    "stream": True,
}):
    print(chunk, end="", flush=True)
```

---

## 12. Construindo Seus Próprios Apps

O inference.sh é uma **plataforma aberta** — você pode criar seus próprios apps e disponibilizá-los para agentes.

### Scaffold de um Novo App

```bash
# Inicializar
infsh app init meu-app

# Estrutura criada:
# meu-app/
# ├── inf.yml          # Configuração
# ├── app.py           # Lógica (Python) ou app.js (Node)
# └── requirements.txt # Dependências Python (se aplicável)
```

### Configuração `inf.yml`

```yaml
name: meu-app
description: "Descrição do que meu app faz"
category: image           # image|video|audio|text|chat|3d|other
kernel: python-3.11      # python-3.11|node-22

resources:
  gpu:
    count: 1
    vram: 24             # GB (auto-converte <1000 para GB, >=1000 para MB)
    type: any            # any|nvidia|amd|apple|none
  ram: 32                # GB

env:
  MODEL_NAME: "meu-modelo"
  TEMPERATURE: 0.7

secrets:
  - key: HF_TOKEN
    description: "HuggingFace API token"
    optional: false

integrations:
  - key: google.sheets
    description: "Acesso ao Google Sheets"
    optional: true
```

### App em Python

```python
from pydantic import BaseModel
from inference_sdk import BaseApp, BaseAppInput, BaseAppOutput

class MeuAppInput(BaseAppInput):
    prompt: str
    style: str = "realistic"

class MeuAppOutput(BaseAppOutput):
    result_url: str
    metadata: dict

class MeuApp(BaseApp):
    def setup(self):
        """Executado uma vez no início."""
        self.model = load_model()

    def run(self, input: MeuAppInput) -> MeuAppOutput:
        """Executado a cada request."""
        result = self.model.generate(input.prompt, style=input.style)
        return MeuAppOutput(
            result_url=result.url,
            metadata={"model": "meu-modelo", "style": input.style}
        )

    def unload(self):
        """Executado ao encerrar."""
        self.model.cleanup()
```

### App em Node.js

```javascript
import { z } from 'zod';

const InputSchema = z.object({
  prompt: z.string(),
  style: z.string().default('realistic'),
});

const OutputSchema = z.object({
  resultUrl: z.string(),
  metadata: z.record(z.any()),
});

export class MeuApp {
  setup() {
    this.model = loadModel();
  }

  async run({ prompt, style }) {
    const result = await this.model.generate(prompt, style);
    return {
      resultUrl: result.url,
      metadata: { model: 'meu-modelo', style },
    };
  }

  unload() {
    this.model.cleanup();
  }
}
```

### Testar Localmente

```bash
# Criar input de teste
infsh app sample meu-app --save test-input.json

# Testar
infsh app test --input test-input.json
```

### Deploy

```bash
infsh app deploy
```

Após o deploy, o app fica disponível como `seu-username/meu-app` e pode ser chamado via CLI:

```bash
infsh app run seu-username/meu-app --input '{"prompt": "test"}'
```

### Apps Multi-Função

Apps podem ter múltiplas funções — cada método público vira uma função disponível:

```python
class MeuAppMulti(BaseApp):
    def run_generate(self, input: GenerateInput) -> GenerateOutput:
        """Função: generate"""
        ...

    def run_edit(self, input: EditInput) -> EditOutput:
        """Função: edit"""
        ...

    def run_upscale(self, input: UpscaleInput) -> UpscaleOutput:
        """Função: upscale"""
        ...
```

Uso:
```bash
infsh app run seu-username/meu-app-multi --function generate --input '{"prompt": "..."}'
infsh app run seu-username/meu-app-multi --function edit --input '{"image": "..."}'
```

---

## 13. Workflows Completos

### Workflow 1 — Gerar Imagem → Animar → Postar no Twitter

```
Claude, faça o seguinte workflow:

1. Gere uma imagem de um astronauta surfando em uma onda de aurora boreal
   usando FLUX Dev LoRA (1024x1024)
2. Anime essa imagem para um vídeo de 4 segundos usando Wan 2.5 I2V
3. Poste o vídeo no meu Twitter com o texto:
   "Nem o espaço é limite para a criatividade com IA 🚀🌊 #AIArt #ClaudeCode"
```

O que acontece internamente:

```bash
# Step 1: Gerar imagem
infsh app run falai/flux-dev-lora --input '{"prompt": "astronaut surfing aurora boreal wave", "width": 1024, "height": 1024}'

# Step 2: Animar
infsh app run bytedance/wan-2-5-i2v --input '{"prompt": "astronaut riding the wave, gentle motion", "image": "./astronaut.png", "duration": 4}'

# Step 3: Postar
infsh app run x/post-create --input '{"text": "Nem o espaço é limite... 🚀🌊 #AIArt", "media": "./astronaut-video.mp4"}'
```

### Workflow 2 — Roteiro → Imagens → Vídeo → Áudio → Legendar

```
Claude, crie um short film de 30 segundos:

1. Escreva um roteiro de 3 cenas sobre "O último programador humano"
2. Para cada cena, gere uma imagem usando Gemini 3 Pro (16:9)
3. Crie narração em português usando Kokoro TTS
4. Anime cada imagem para vídeo de 8s usando Veo 2
5. Junte os 3 vídeos com transição fade usando stitch-videos
6. Adicione legendas ao vídeo final
```

### Workflow 3 — Thumbnail → Blog Post → Social Media

```
Claude, crie conteúdo completo para lançamento de produto:

1. Gere um thumbnail 1280x720 para YouTube usando FLUX Klein LoRA
   com o texto "Novo Produto: IA Agent Tools"
2. Pesquise sobre "agent skills for AI" usando Tavily search
3. Use o Claude Sonnet via OpenRouter para escrever um blog post
   de 800 palavras baseado na pesquisa
4. Gere uma imagem de capa para o blog post usando Seedream 4.5
5. Crie 3 variações de tweet sobre o produto usando Kokoro TTS
   e poste no Twitter
```

### Workflow 4 — Vídeo Animado com Remotion + Música

```
Claude, crie um vídeo promocional:

1. Gere 5 imagens de slides usando Gemini 3 Pro (1920x1080)
2. Crie código Remotion TSX que:
   - Slide 1 (0-3s): Título da empresa com spring animation
   - Slide 2 (3-6s): Problema com fade-in
   - Slide 3 (6-9s): Solução com zoom
   - Slide 4 (9-12s): Depoimento com typewriter effect
   - Slide 5 (12-15s): CTA com pulse animation
3. Renderize usando remotion-render (30fps, h264)
4. Gere música de fundo usando ElevenLabs Music (15s, upbeat)
5. Mescle vídeo + música usando merge-media
```

### Workflow 5 — Podcast Automático

```
Claude, crie um episódio de podcast:

1. Pesquise as últimas notícias de IA usando Exa search
2. Use Claude Sonnet para escrever um roteiro de podcast de 10 minutos
   com 2 apresentadores
3. Gere o diálogo usando ElevenLabs Dialogue com 2 vozes diferentes
4. Gere efeitos sonoros de transição usando ElevenLabs Sound Effects
5. Junte tudo usando Python executor (moviepy) para criar o episódio final
```

---

## 14. Referência Rápida

### Instalação

```bash
# CLI
curl -fsSL https://cli.inference.sh | sh
infsh login

# Skills (todas)
npx skills add inference-sh/skills

# Plugin Claude Code
/plugin install inference-sh
```

### Comandos CLI Essenciais

| Comando | Descrição |
|---|---|
| `infsh app list` | Listar todos os apps |
| `infsh app list --category image\|video\|audio\|text` | Filtrar por categoria |
| `infsh app list --search "flux"` | Buscar apps |
| `infsh app get <app>` | Detalhes do app |
| `infsh app sample <app>` | Exemplo de input |
| `infsh app run <app> --input '<json>'` | Executar app |
| `infsh task get <task-id>` | Ver resultado |
| `infsh app init <name>` | Criar novo app |
| `infsh app deploy` | Deploy |

### Mapa de Skills

| Skill | Comando de Instalação |
|---|---|
| **Imagens (50+ modelos)** | `npx skills add inference-sh/skills@ai-image-generation` |
| **Vídeos (40+ modelos)** | `npx skills add inference-sh/skills@ai-video-generation` |
| **FLUX** | `npx skills add inference-sh/skills@flux-image` |
| **Google Veo** | `npx skills add inference-sh/skills@google-veo` |
| **Avatares** | `npx skills add inference-sh/skills@ai-avatar-video` |
| **Image-to-Video** | `npx skills add inference-sh/skills@image-to-video` |
| **Remotion** | `npx skills add inference-sh/skills@remotion-render` |
| **TTS** | `npx skills add inference-sh/skills@text-to-speech` |
| **ElevenLabs TTS** | `npx skills add inference-sh/skills@elevenlabs-tts` |
| **ElevenLabs Dubbing** | `npx skills add inference-sh/skills@elevenlabs-dubbing` |
| **STT (Transcrição)** | `npx skills add inference-sh/skills@speech-to-text` |
| **Voice Cloning** | `npx skills add inference-sh/skills@ai-voice-cloning` |
| **Música** | `npx skills add inference-sh/skills@ai-music-generation` |
| **Twitter/X** | `npx skills add inference-sh/skills@twitter-automation` |
| **LLMs** | `npx skills add inference-sh/skills@llm-models` |
| **Web Search** | `npx skills add inference-sh/skills@web-search` |
| **RAG Pipeline** | `npx skills add inference-sh/skills@ai-rag-pipeline` |
| **Browser** | `npx skills add inference-sh/skills@agent-browser` |
| **Python Executor** | `npx skills add inference-sh/skills@python-executor` |
| **JS SDK** | `npx skills add inference-sh/skills@javascript-sdk` |
| **Python SDK** | `npx skills add inference-sh/skills@python-sdk` |
| **Building Apps** | `npx skills add inference-sh/skills@building-apps` |

### Links Úteis

- **Plataforma:** [https://inference.sh](https://inference.sh)
- **GitHub:** [https://github.com/inference-sh/skills](https://github.com/inference-sh/skills)
- **Skills Directory:** [https://skills.sh](https://skills.sh)
- **Twitter do Omer:** [@omertrash](https://twitter.com/omertrash)
- **CLI Installer:** `curl -fsSL https://cli.inference.sh | sh`

---

> **Dica final:** A melhor forma de aprender é pedir ao seu agente. Depois de instalar as skills, experimente pedir coisas como "Gere uma imagem de X", "Crie um vídeo de Y", "Poste no meu Twitter". O agente sabe qual comando executar — você só precisa descrever o que quer.
