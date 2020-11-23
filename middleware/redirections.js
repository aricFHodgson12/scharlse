export default function({ route, redirect }) {
  const path = route.path;

  if (
    path.includes("/just-back-from") ||
    path.includes("/category") ||
    path.includes("/subscribe") ||
    path.includes("/new-page")
  ) {
    redirect(301, "/");
  } else if (path.includes("/blog") || path.includes("/sienna-charles-blog")) {
    redirect(301, "/magazine");
  }
  else if (path.includes('/luxury-homes-and-estates')) {
    redirect(301, "/luxury-away-services/luxury-estates-luxury-villas"); 
  }
  else if (path.includes('/luxury-yacht-experiences')) {
    redirect(301, "/luxury-away-services/luxury-yachts"); 
  }

  if (path == '/our-specialties' || path == '/our-specialties/') {
    redirect(301, "/about/our-specialties"); 
  }  

  if (path == '/about' || path == '/about/') {
      redirect(301, "/about/our-approach");   
  }
}
