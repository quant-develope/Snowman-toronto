# Snowman Toronto — сайт уборки снега для Toronto & GTA

Лендинг под Google Ads на английском: сезонные контракты на уборку снега, разовая уборка после снегопада, дорожки и ступени, соль, windrow (вал от городского грейдера), снег и наледь с крыш, коммерческие парковки, вывоз снега. Статический сайт без фреймворков + Cloudflare Worker для приёма заявок. Сделан по образцу сайта гаттеров (quant-develope/Gutters).

Адрес: https://snowman-toronto.unknwn-creation.workers.dev/ · телефон (825) 462-1811.

## Что на сайте

- Хедер с телефоном и меню (услуги, планы, статьи, отзывы, FAQ, ссылки на сайты гаттеров и гирлянд).
- Hero с падающим снегом → **форма заявки** (имя, телефон, адрес, город, размер участка, услуга) → блок «24/7».
- Услуги, три плана (Per visit / Seasonal / Seasonal Plus, без цен — цена по адресу), «почему не стоит ждать», «как мы работаем», отзывы Google, «You may be interested» (UCO Lights и UCO Gutters), FAQ.
- Всегда видны: нижняя панель «телефон + Get a free quote», кнопка WhatsApp и кнопка-гирлянда.
- 5 статей в `/guides/`, `/thank-you/` для конверсий, `/privacy/`, sitemap и robots.

## Как менять

| Что | Где |
|---|---|
| Телефон, WhatsApp, email, часы, бренд, домен, GTM ID, глубина снега для выезда, сезон | `src/config.mjs` → `site` |
| Услуги, города, планы, партнёры, отзывы | `src/config.mjs` |
| Статьи | `src/guides.mjs` |
| Тексты страниц | `src/pages.mjs` |
| Стили / скрипты | `public/assets/css/main.css`, `public/assets/js/main.js` |
| Картинка в hero | `public/assets/img/hero-snow.svg` |

Сборка: `npm run build` → папка `dist/`. Нужен только Node 18+.

## Деплой на Cloudflare Workers

1. Cloudflare → Workers & Pages → Create → **Import a repository** → `quant-develope/Snowman-toronto`, ветка `main`.
2. Имя Worker — `snowman-toronto` (берётся из `wrangler.jsonc`), Build command — пусто (сборка указана в `wrangler.jsonc`), Deploy command — `npx wrangler deploy`.
3. После деплоя сайт откроется на https://snowman-toronto.unknwn-creation.workers.dev/. Каждое слияние в `main` обновляет сайт.

## Куда приходят заявки

Заявка уходит во все настроенные каналы; достаточно одного работающего, иначе форма покажет ошибку и попросит позвонить.

**Telegram:** Worker `snowman-toronto` → Settings → Variables and Secrets → `TELEGRAM_BOT_TOKEN` (токен бота от @BotFather) и `TELEGRAM_CHAT_ID` (числовой id чата @tradingpovene). Можно взять тот же бот, что у сайта гаттеров. Получатель должен один раз нажать Start у бота, иначе Telegram не даст боту написать первым. Id чата: написать боту любое сообщение и открыть `https://api.telegram.org/bot<ТОКЕН>/getUpdates` → `chat.id`.

**Toronto CRM** (https://crm-toronto1.unknwn-creation.workers.dev/): подключено в `wrangler.jsonc` через service binding `CRM` к Worker `crm-toronto1` (entrypoint `SiteLeads`). Заявка появляется в CRM в меню «Звонки» как «Заявка с сайта — позвонить», Quant и КЦ получают уведомление, кнопка «Создать заявку» подставляет имя, телефон, адрес и пожелания. Секреты не нужны: binding работает только внутри аккаунта Cloudflare. В CRM в «Сайтах» стоит добавить этот сайт с номером +1 825 462-1811 и отметить, кто его ведёт, — тогда клиенты закрепляются за этим оператором.

**Email через resend.com** (необязательно): `RESEND_API_KEY`, `LEAD_EMAIL_TO`, `LEAD_EMAIL_FROM`. **Webhook**: `LEAD_WEBHOOK_URL`.

В заявке есть UTM-метки и отметка клика Google Ads (gclid).

## Google Ads и аналитика

Впишите ID контейнера GTM в `site.gtmId`. События в `dataLayer`: `generate_lead` (страница `/thank-you/`), `phone_click`, `quote_click`, `form_start`, `whatsapp_click`.

## Локальный запуск

```bash
npm run build
npx wrangler dev   # сайт + форма на http://localhost:8787
```

Чтобы проверить отправку в CRM локально, запустите оба Worker вместе: `npx wrangler dev -c wrangler.jsonc -c ../Toronto-CRM/wrangler.jsonc`.
Переменные для локального теста — в `.dev.vars` (файл в .gitignore).
