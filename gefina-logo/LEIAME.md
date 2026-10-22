# Gefina — kit da logo (opção 4: wordmark)

As letras são da fonte **Sora Bold**, já convertidas em curvas. Os SVGs não dependem de fonte instalada.

## O que tem aqui

| Pasta | Arquivo | Uso |
|---|---|---|
| `svg/` | `gefina-logo.svg` | Logo principal, para fundo escuro (padrão do site) |
| | `gefina-logo-fundo-claro.svg` | Para fundos claros (e-mails, documentos, PDF) |
| | `gefina-logo-branco.svg` / `gefina-logo-preto.svg` | Uma cor só, para fotos, carimbos e impressão em 1 cor |
| | `gefina-icone.svg` | Ícone (g + losango verde), para avatar, redes sociais e app |
| | `favicon.svg` | Favicon simplificado, sem o losango |
| `png/` | `gefina-logo*-64/128/256px.png` | As mesmas versões em PNG, por altura |
| | `gefina-icone-512/1024.png` | Ícone em PNG |
| `web/` | `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `site.webmanifest` | Arquivos para colocar na raiz pública do site (`public/`) |
| `react/` | `GefinaLogo.tsx` | Componente React com o SVG embutido |

## No site

Copie o conteúdo de `web/` para a pasta pública (`public/`) e coloque isto no `<head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0f1117">
```

Logo no cabeçalho, como imagem:

```html
<a href="/" aria-label="Gefina, página inicial">
  <img src="/gefina-logo.svg" alt="Gefina" height="28">
</a>
```

Ou com o componente React. As letras usam `currentColor` e o losango usa `--color-primary`:

```tsx
import { GefinaLogo } from "./GefinaLogo";

<a href="/" aria-label="Gefina, página inicial" style={{ color: "var(--color-text)" }}>
  <GefinaLogo height={28} />
</a>
```

## Cores

| Elemento | Cor | Token |
|---|---|---|
| Letras (fundo escuro) | `#e8eaed` | `--color-text` |
| Letras (fundo claro) | `#0f1117` | `--color-background` |
| Losango | `#6e56cf` | `--color-primary` |
| Fundo do ícone | `#6e56cf` | `--color-primary` |
| Losango do ícone | `#3fb950` | `--color-paid` |

## Regras de uso

- **Área de proteção:** deixe em volta da logo um espaço livre igual à altura do losango.
- **Tamanho mínimo:** 20 px de altura na tela. Abaixo disso, use o ícone.
- **Losango:** use sempre o roxo, ou a mesma cor das letras nas versões de uma cor. Não use as cores de status pendente (âmbar) nem vencido (vermelho).
- **Não faça:** esticar, inclinar, trocar a fonte, recolocar o pingo redondo do "i", aplicar sombra ou degradê, ou usar sobre fundos com pouco contraste.

## Licença da fonte

A Sora é distribuída sob a SIL Open Font License 1.1, que permite usá-la em logotipos.
