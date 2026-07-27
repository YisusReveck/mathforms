// formularios.data.ts — actualizado con campo descripcion opcional

export interface FormItem {
  titulo: string;
  descripcion?: string;
  preview: string;
  archivo: string;
}

export const FORMULARIOS: FormItem[] = [
  {
    titulo: 'Álgebra',
    descripcion: 'Productos notables, factorización y expresiones clave de álgebra.',
    preview: '/math_forms/individual-forms/Página 6.png',
    archivo: '/math_forms/individual-forms/Página 6.pdf',
  },
  {
    titulo: 'Geometría',
    descripcion: 'Ángulos, triángulos, teoremas y elementos fundamentales.',
    preview: '/math_forms/individual-forms/Página 5.png',
    archivo: '/math_forms/individual-forms/Página 5.pdf',
  },
  {
    titulo: 'Figuras',
    descripcion: 'Fórmulas y relaciones de figuras geométricas planas.',
    preview: '/math_forms/individual-forms/Página 7.png',
    archivo: '/math_forms/individual-forms/Página 7.pdf',
  },
  {
    titulo: 'Cuerpos',
    descripcion: 'Sólidos geométricos y sus propiedades principales.',
    preview: '/math_forms/individual-forms/Página 8.png',
    archivo: '/math_forms/individual-forms/Página 8.pdf',
  },
  {
    titulo: 'Trigonometría',
    descripcion: 'Razones, relaciones y fórmulas trigonométricas esenciales.',
    preview: '/math_forms/individual-forms/Página 1.png',
    archivo: '/math_forms/individual-forms/Página 1.pdf',
  },
  {
    titulo: 'Identidades Trigonométricas',
    descripcion: 'Identidades y equivalencias más usadas en trigonometría.',
    preview: '/math_forms/individual-forms/Página 2.png',
    archivo: '/math_forms/individual-forms/Página 2.pdf',
  },
  {
    titulo: 'Derivadas',
    descripcion: 'Reglas y casos más comunes de derivación.',
    preview: '/math_forms/individual-forms/Página 4.png',
    archivo: '/math_forms/individual-forms/Página 4.pdf',
  },
  {
    titulo: 'Integrales',
    descripcion: 'Fórmulas de integrales más comunes.',
    preview: '/math_forms/individual-forms/Página 3.png',
    archivo: '/math_forms/individual-forms/Página 3.pdf',
  },
];
