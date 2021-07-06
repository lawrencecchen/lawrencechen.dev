---
layout: article
title: Webflow 2.0
publishedOn: 2021-07-05 21:28
showRelativeTime: false
updatedOn: null
isPublished: true
---

[comment]: # "README: Edit the title of your post. Set `isPublished` to true whenever you're ready to publish. Don't forget to commit + push to your git repo."

<script>
	import Callout from '$lib/components/Callout/Callout.svelte';
</script>

<Callout emoji="🔨">
This is a work in progress.
</Callout>

Of the no-code tools out there today, Webflow represents the local maxima of last-generation website builders. ^[(in terms of pure technical prowess of the product.) Other incumbents include WordPress, Wix, Weebly, and Squarespace. ] They have identified the archetypes of most websites, such as e-commerce, blogs, landing pages, and newsletters. However, they've created inflexible platforms rather than building blocks. These tools are poor SDKs for the web.

While last-gen tools have empowered 10x designers and marketers, the next generation of low-code tools will create 10x developers. These tools will be characterized by JavaScript framework interoperability, flexible styling, incremental Git CI/CD integration, and built in data persistence. Unlike previous no-code tools, where creating CRUD apps were nigh impossible, CRUD functionality will be the baseline for Webflow 2.0 tools.

Here are several companies in this space right now:

- [Retool](https://retool.com/)
- [Bubble](https://bubble.io/)
- [FlutterFlow](https://flutterflow.io/)
- [Glide](https://www.glideapps.com/2.0)
- [Plasmic](http://plasmic.app/)

All of them suffer rom JavaScript bloat. Several of them abandon [CSS normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) and rely on absolute positioning hacks. The winners will not reinvent the wheel. Rather, they will rely on web fundamentals and utilize open-source frameworks to create a cohesive SDK for the web.

One possible stack (that I'm very bullish on) would integrate [SvelteKit](https://kit.svelte.dev/) and [Tailwind](https://tailwindcss.com/) with [Supabase](https://supabase.io/) or [NHost](https://nhost.io/). All four projects are open sourced under the MIT license -- all that's left is to package the tools into a browser environment, design a drag-and-drop tool that abides browser standards, create a CI/CD experience that rivals [Vercel's](https://vercel.com/home), implement real time multiplayer like [Figma's](http://figma.com/), and then you've got yourself a killer web app builder. It's not easy, but making this is almost possible.

Webflow 2.0 tools will take advantage of modern browsers. The activation energy for my envisioned killer low-code builder will be when [WebContainers](https://blog.stackblitz.com/posts/introducing-webcontainers/) enables [Vite](https://vitejs.dev/) to run in the browser. [Next.js Live](https://nextjs.org/live) provides a brief glimpse at this future, although Next.js will certainly be surpassed by Vite based frameworks.

## The No Code Programming Language

