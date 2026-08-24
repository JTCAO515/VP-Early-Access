# HANDOFF — VP Early Access interactive product demo

- Objective: show VisePanda’s planned product depth through a fully clickable, browser-framed Demo on the Early Access page.
- Scope completed: Ask VisePanda, six preset chats, Trip Canvas timeline/map/bookings, Copilot memory, Explore places/tools, User profile editing and a fictional Michael Turner avatar.
- Public CTA: every Early Access link still points directly to `https://form.jotform.com/cjttttt/visepanda-early-access`.
- Truth boundary: all conversations, prices, reviews, account details and external-service handoffs are explicit static Demo fixtures; no live booking, Didi, inventory or real user is represented.

## Frozen contracts preserved

- No frozen waitlist API, validation, rate-limit, form, simulator, mobile showcase or existing icon file was changed.
- No secret or provider key was added.
- Product Demo copy is centralized in `lib/copy.ts` and remains bilingual.
- Michael Turner and `michael.turner@example.com` are fictional; the avatar is a generated project-local asset.

## Delivered interaction states

- Ask: New Chat, Shanghai three-day trip, Shanghai-to-Beijing transport, Beijing luxury hotel, Shanghai restaurants and imported-guide validation.
- Trip Canvas: synchronized timeline, map and booking-handoff views; chat switches reset the Canvas to its timeline.
- Restaurant: dish drawer with taste, ingredients, allergen and group-deal preview.
- Copilot: long-term traveler profile, budget, pace, walking and allergy adaptation.
- Explore: Shanghai attractions/restaurants/hotels with POI drawers; Beijing, Guangzhou and Shenzhen show scoped preparation states; translation, ride-hailing, visa/regulations and network/SIM tool previews.
- User: standard account surface plus editable VisePanda memory judgement and visible save feedback.

## Verification

- `pnpm check` — passed.
- `git diff --check` — passed.
- Product Demo interaction matrix — passed at 1440×900 and 375×812 in English and Chinese.
- Console errors — none.
- Horizontal page overflow — none at both viewport sizes.
- Frozen waitlist API regression — not run in this slice; unchanged and recorded passed in the previous handoff.
- China-map regression — passed: 37 markers/four outline paths rendered; five-second autoplay advanced, manual selection paused playback, and reduced-motion prevented autoplay.
- Live JotForm submission — not run; no user email was transmitted during QA.

## Operator actions

1. Confirm the JotForm public URL remains current.
2. Confirm the Vercel custom-domain binding for `go2china.space/earlyaccess`.
3. Replace the CSS POI/dish image placeholders with approved local assets in a later image pass.

## Rollback

Revert the interactive product Demo commit. The frozen API and direct JotForm CTA are isolated from this UI slice.

## Next action

Verify the GitHub-main Vercel deployment and custom-domain route after release.
