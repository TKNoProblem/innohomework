# PricingCard Component Documentation

## 1. Business Goals
- **Boost Conversion Rates:** Present pricing plans clearly and attractively to encourage user sign-ups and purchases.
- **Ensure Brand Consistency:** Maintain a uniform look and feel for all pricing displays across the application.
- **Streamline Development:** Create a reusable component to reduce future development time and effort when implementing pricing sections.

## 2. Technical Specifications
### 2.1 Component Overview
- The `PricingCard` is a React function component built with TypeScript.
- Styled exclusively using Tailwind CSS utility classes.
- Designed for accessibility and responsiveness.

### 2.2 Component Props
| Prop         | Type      | Required | Description                                      |
|--------------|-----------|----------|--------------------------------------------------|
| plan         | string    | Yes      | The name of the pricing plan (e.g., "Pro").      |
| price        | string    | Yes      | The cost of the plan (e.g., "$200").            |
| features     | string[]  | Yes      | Array of features included in the plan.           |
| isFeatured   | boolean   | No       | Highlights the card visually if true.             |

### 2.3 Behavior and Styling
- **Responsive Stacking:**
  - On screens <640px, cards stack vertically.
  - On screens ≥640px, cards display horizontally.
- **Hover Elevation:**
  - On desktop, the card shows a subtle shadow on hover.
- **Keyboard Focus Ring:**
  - Full focus ring when navigated via keyboard for accessibility.
- **No Inline Styles:**
  - All styling is via Tailwind CSS utility classes.

### 2.4 Usage Example
```
<PricingCard
  plan="Pro"
  price="$200"
  features={["100,000 Requests", "7 contributors", "Up to 6 GB storage space"]}
  isFeatured={true}
/>
```

---

# PricingSection Component
- The `PricingSection` component arranges three `PricingCard` components horizontally (or stacked on mobile), passing all values as variables.
- The middle card is visually featured.
- All plan details are passed as props, not hardcoded in JSX. 