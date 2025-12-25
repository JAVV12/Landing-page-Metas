# Landing Page - Mentoring de Liderazgo Personal

## Descripción
Landing page completa para el servicio de Mentoring 1:1 de Liderazgo Personal de Alejandro Valencia, construida con Next.js 14, TypeScript y Tailwind CSS.

## Características Implementadas

### ✅ Arquitectura y Stack
- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para styling
- Diseño **100% responsive** (375px/768px/1024px/1280px)

### ✅ Estructura Modular
- **Datos centralizados** en `content/inputs.ts`
- **Componentes modulares** separados por funcionalidad
- **Hook de Pricing**: Una sola columna centrada (según `planCount: 1`)

### ✅ Secciones Implementadas
1. **Hero** - Headline principal, subtítulo, CTA y estadísticas
2. **Problema** - Dolores del público objetivo
3. **Solución** - Deseos y resultados prometidos
4. **Módulos** - Contenido del programa de 90 días (6 módulos)
5. **Testimonial** - Prueba social destacada
6. **Pricing** - Una sola columna centrada con detalles del plan
7. **Bonos** - Recursos exclusivos ($447 USD en valor)
8. **Garantía** - Compromiso de crecimiento asegurado
9. **FAQ** - Preguntas frecuentes y manejo de objeciones
10. **CTA Final** - Llamado a acción final con canales de contacto

### ✅ Diseño y UX
- **Paleta de colores personalizada**:
  - **Color primario**: Azul marino oscuro (#0d1f2d)
  - **Color secundario**: Blanco (#FFFFFF)
  - **Color terciario**: Dorado/beige (#dcc97f)
- **Tipografía moderna**: Geist Sans para legibilidad
- **Tono emocional**: Enfoque en transformación y liberación del potencial
- **Animaciones sutiles** y transiciones suaves

### ✅ SEO y Accesibilidad
- Meta tags optimizados
- Estructura semántica HTML
- Navegación por teclado
- Contraste de colores adecuado
- Idioma español configurado

## Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

La aplicación estará disponible en `http://localhost:3000`

## Estructura de Archivos

```
landing-page/
├── src/
│   ├── content/
│   │   └── inputs.ts      # Datos centralizados
│   ├── app/
│   │   ├── layout.tsx     # Layout principal con SEO
│   │   ├── page.tsx       # Página principal
│   │   └── globals.css    # Estilos globales
│   └── components/        # Componentes modulares
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── Modules.tsx
│       ├── Testimonial.tsx
│       ├── Pricing.tsx
│       ├── Bonuses.tsx
│       ├── Guarantee.tsx
│       ├── FAQ.tsx
│       └── FinalCTA.tsx
└── public/                # Assets estáticos
```

## Personalización

Todos los textos, precios, URLs y configuraciones se pueden modificar editando el archivo `content/inputs.ts`. Los componentes automáticamente reflejarán los cambios.

### Cambios de Precio
- Modificar `plans[0].price` para cambiar el precio principal
- Actualizar `plans[0].note` para las opciones de pago

### Cambios de Contenido
- `pains[]` y `desires[]` para problemas y soluciones
- `modules[]` para el contenido del programa
- `bonuses[]` para recursos adicionales

## Próximos Pasos

1. **Imágenes**: Reemplazar placeholders con fotos profesionales de liderazgo
2. **Analytics**: Integrar Google Analytics o similar
3. **Formularios**: Conectar CTAs con sistemas de gestión de leads
4. **A/B Testing**: Implementar pruebas de diferentes versiones
5. **Optimización**: Comprimir imágenes y optimizar Core Web Vitals

## Tecnologías Utilizadas

- **Framework**: Next.js 14.2.14
- **Lenguaje**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 4.0.0
- **Font**: Geist Sans & Geist Mono
- **Icons**: SVG inline para mejor performance
