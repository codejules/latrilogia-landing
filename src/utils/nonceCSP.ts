import type { AstroGlobal } from 'astro';

export function nonceCSP(Astro: AstroGlobal) {
    const nonce = crypto.randomUUID().replace(/-/g, "");

    Astro.response.headers.set(
        'Content-Security-Policy',
        `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://js.hcaptcha.com https://newassets.hcaptcha.com https://cdn.jsdelivr.net https://web3forms.com; style-src 'self' 'unsafe-inline'; font-src 'self'; object-src 'none'; frame-src https://newassets.hcaptcha.com; connect-src 'self' https://newassets.hcaptcha.com; img-src 'self';`
    );

    return { nonce };
}
