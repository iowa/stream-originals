export default function StreamerListItemDescription({ plot }: { plot: string | null }) {
  return (
    <p class="text-sm text-foreground leading-relaxed">
      {plot}
    </p>
  );
}

