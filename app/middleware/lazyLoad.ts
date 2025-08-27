export default defineNuxtRouteMiddleware((to) => {
  // Rute yang perlu di-lazy load
  const lazyRoutes = [
    "activities",
    "events",
    "partnership",
    "sponsorship",
    "talents",
    "tickets",
  ];

  if (lazyRoutes.includes(to.name as string)) {
    // Hanya load komponen ketika benar-benar dibutuhkan
    return;
  }
});
