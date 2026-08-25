# VP Early Access agent instructions

## Public copy

- Use the globally installed `humanizer` skill for English prose and `humanizer-zh` for Chinese prose whenever public-facing copy is written or revised.
- Default Chinese voice: neutral product writing. Do not imitate a named author unless the operator explicitly asks.
- Edit bilingual pairs together. Preserve facts, numbers, product boundaries, state names, source/recheck language, route arrows, prices, dates, CTA destinations and Demo fixture labels.
- Prefer short, concrete sentences. Say what the product does, what the user sees and what still requires confirmation.
- Remove inflated claims, generic optimism, report language, formulaic contrast, forced groups of three and decorative em/en dashes from prose.
- Keep standard interface labels stable unless there is a specific usability reason to rename them.
- Do not add social proof, live inventory, partnership claims, real-time claims or external-service availability that the repository cannot prove.

## Copy ownership

- `lib/copy.ts` owns landing-page, map, comparison and shell copy.
- `lib/demo/` owns product Demo fixtures and Demo UI copy.
- Do not move text between these modules only for stylistic cleanup.
