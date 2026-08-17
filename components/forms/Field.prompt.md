Text input, textarea, search field and range slider. Labels are mono, 9px, uppercase, always above the control -- never floating, never inside it.

```jsx
<TextField label="Beneficiary name" placeholder="Ada Okonjo" help="As it appears on the receiving account." />
<TextField label="IBAN" error help="IBAN checksum failed -- check the last four digits." />
<SearchField placeholder="Search payments, beneficiaries, references" />
```

Error state turns the border `--nv-error` and the help text red + bold -- color and weight both change, not color alone, for colorblind users. Disabled locks the fill to `--nv-disabled`.