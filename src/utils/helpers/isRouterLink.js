// =============================================================================
// export
// =============================================================================

export default function isRouterLink(link, target) {
  return !link.includes('//') && !link.includes('mailto') && !target;
}
