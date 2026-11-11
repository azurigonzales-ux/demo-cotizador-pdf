/**
 * CONFIGURACIÓN CENTRALIZADA DE LA EMPRESA EMISORA
 * Edita este objeto para personalizar los datos del negocio, catálogo de servicios,
 * cuentas bancarias y condiciones comerciales.
 */
const CONFIG = {
  empresa: {
    nombre: "ClimaTech Tabasco — Soluciones e Instalaciones",
    nombreCorto: "ClimaTech Tabasco",
    eslogan: "Ingeniería en Climatización, Refrigeración y Mantenimiento Integral",
    rfc: "CTT210514V98",
    telefono: "993 314 8892",
    whatsapp: "529933148892",
    email: "contacto@climatechtabasco.mx",
    direccion: "Av. Paseo Tabasco #1405, Local 4B, Col. Tabasco 2000, C.P. 86035, Villahermosa, Tabasco.",
    web: "www.climatechtabasco.mx",
    responsable: "Ing. Roberto Carlos Méndez Domínguez",
    cargoResponsable: "Director de Operaciones y Proyectos",
    // Logo SVG embebido en Data URI para garantizar que html2pdf.js lo renderice sin problemas de CORS
    logoUrl: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none">
        <rect width="120" height="120" rx="24" fill="#0f172a"/>
        <rect x="6" y="6" width="108" height="108" rx="20" stroke="#0284c7" stroke-width="3" stroke-opacity="0.5"/>
        <path d="M60 22V98M22 60H98M33 33L87 87M87 33L33 87" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
        <circle cx="60" cy="60" r="16" fill="#0f172a" stroke="#f8fafc" stroke-width="5"/>
        <path d="M60 22L50 32M60 22L70 32M60 98L50 88M60 98L70 88M22 60L32 50M22 60L32 70M98 60L88 50M98 60L88 70" stroke="#0284c7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `),
    datosBancarios: {
      banco: "BBVA México",
      titular: "ClimaTech Tabasco S.A. de C.V.",
      cuenta: "0118 4920 31",
      clabe: "012 790 00118492031 8",
      referencia: "Indicar número de Folio en el concepto de transferencia"
    }
  },

  condicionesGarantia: [
    "Garantía de 90 días naturales en mano de obra e instalaciones a partir de la fecha de entrega.",
    "Los equipos nuevos y compresores cuentan con la garantía directa del fabricante (1 a 5 años según marca), válida únicamente presentando esta nota o factura.",
    "No aplica garantía en partes eléctricas ni tarjetas electrónicas dañadas por variaciones de voltaje sin supresor de picos o falta de tierra física.",
    "Toda cotización requiere un 50% de anticipo para programar visita técnica o apartado de equipos, y el 50% restante al finalizar y entregar de conformidad."
  ],

  notasPieCotizacion: "Precios sujetos a cambio sin previo aviso después de la fecha de vigencia. Tiempo de entrega sujeto a disponibilidad en almacén Villahermosa.",
  notasPieRemision: "Recibí de conformidad los trabajos, servicios y/o materiales descritos en la presente nota de remisión, funcionando adecuadamente a mi entera satisfacción.",

  catalogo: [
    {
      id: "SRV-001",
      categoria: "Mantenimiento",
      concepto: "Mantenimiento Preventivo Minisplit 1 a 1.5 Ton (Lavado con hidrojet a presión, desinfección de serpentín, limpieza de turbina y revisión de amperaje)",
      unidad: "Servicio",
      precio: 650.00
    },
    {
      id: "SRV-002",
      categoria: "Mantenimiento",
      concepto: "Mantenimiento Preventivo Minisplit 2 a 3 Ton (Lavado químico de condensadora y evaporadora, destape de drenaje y chequeo de presiones)",
      unidad: "Servicio",
      precio: 850.00
    },
    {
      id: "SRV-003",
      categoria: "Instalación",
      concepto: "Instalación Básica de Minisplit 1 a 1.5 Ton (Con kit de fábrica hasta 3 metros de tubería, perforación en muro estándar, vacío con bomba y puesta en marcha)",
      unidad: "Servicio",
      precio: 1450.00
    },
    {
      id: "SRV-004",
      categoria: "Recarga de Gas",
      concepto: "Carga Completa de Gas Refrigerante Ecológico R410A (Incluye barrido de sistema, vacío profundo con micrómetro y carga por peso para equipo 1 Ton)",
      unidad: "Carga",
      precio: 1200.00
    },
    {
      id: "SRV-005",
      categoria: "Recarga de Gas",
      concepto: "Suministro y Recarga de Gas R22 / R32 por libra adicional para compensación de presión",
      unidad: "Suministro",
      precio: 480.00
    },
    {
      id: "REF-006",
      categoria: "Refacciones",
      concepto: "Suministro y reemplazo de Capacitor de Trabajo Dual (35+5 uF / 45+5 uF 440V) servicio pesado para compresor y ventilador",
      unidad: "Pieza",
      precio: 580.00
    },
    {
      id: "INS-007",
      categoria: "Instalación Eléctrica",
      concepto: "Acometida Eléctrica 220V hasta 10 metros (Cable THW-LS Cal. 10, centro de carga QO2, pastilla termomagnética 2x20A y canaleta/poliducto)",
      unidad: "Lote",
      precio: 1950.00
    },
    {
      id: "MAT-008",
      categoria: "Materiales",
      concepto: "Metro lineal adicional de kit de tubería de cobre flexible (1/4 y 1/2), armaflex térmico, cable de control 4x16 y cinta momia",
      unidad: "Metro",
      precio: 390.00
    },
    {
      id: "MAT-009",
      categoria: "Herrajes",
      concepto: "Juego de Ménsulas / Soportes de pared reforzados con pintura electrostática anticorrosiva + taquetes expansivos para condensadora",
      unidad: "Juego",
      precio: 420.00
    },
    {
      id: "EQP-010",
      categoria: "Equipos Nuevos",
      concepto: "Minisplit Inverter 1 Ton (12,000 BTU) 220V Solo Frío — Alta Eficiencia SEER 18 con tubería 100% cobre",
      unidad: "Equipo",
      precio: 7450.00
    },
    {
      id: "REP-011",
      categoria: "Reparación",
      concepto: "Detección de fuga con nitrógeno seco a presión, soldadura con plata en serpentín y cambio de válvula pivote",
      unidad: "Servicio",
      precio: 950.00
    },
    {
      id: "DIAG-012",
      categoria: "Diagnóstico",
      concepto: "Visita Técnica y Diagnóstico Especializado en Sitio (Zona Urbana Villahermosa — Bonificable al 100% al autorizar reparación)",
      unidad: "Visita",
      precio: 350.00
    }
  ]
};

/**
 * COMPONENTE PRINCIPAL ALPINE.JS
 */
document.addEventListener("alpine:init", () => {
  Alpine.data("cotizadorApp", () => ({
    config: CONFIG,
    activeMobileTab: "editor", // 'editor' | 'preview'
    tipoDocumento: "cotizacion", // 'cotizacion' | 'remision'
    folio: "",
    fecha: "",
    vigenciaDias: 15,

    cliente: {
      nombre: "Residencial Los Mangos — Arq. Daniel Jiménez",
      telefono: "9931254090",
      direccion: "Calle Paseo de las Flores #218, Fracc. Carrizal, Villahermosa, Tab.",
      atencion: "Obra Remodelación Planta Alta"
    },

    busquedaCatalogo: "",
    mostrarResultadosCatalogo: false,

    nuevoConcepto: {
      concepto: "",
      unidad: "Servicio",
      cantidad: 1,
      precio: ""
    },

    partidas: [
      {
        id: 1,
        concepto: "Mantenimiento Preventivo Minisplit 1 a 1.5 Ton (Lavado con hidrojet a presión, desinfección de serpentín, limpieza de turbina y revisión de amperaje)",
        unidad: "Servicio",
        cantidad: 2,
        precio: 650.00
      },
      {
        id: 2,
        concepto: "Carga Completa de Gas Refrigerante Ecológico R410A (Incluye barrido de sistema, vacío profundo con micrómetro y carga por peso para equipo 1 Ton)",
        unidad: "Carga",
        cantidad: 1,
        precio: 1200.00
      },
      {
        id: 3,
        concepto: "Suministro y reemplazo de Capacitor de Trabajo Dual (35+5 uF / 45+5 uF 440V) servicio pesado para compresor y ventilador",
        unidad: "Pieza",
        cantidad: 1,
        precio: 580.00
      }
    ],

    descuentoPorcentaje: 0,
    agregarIva: true, // true = +16% IVA, false = Precios Netos
    anticipo: 1000,
    metodoPago: "Transferencia SPEI / Efectivo",
    observacionesEspeciales: "Trabajos programados con personal uniformado y herramienta completa. Se entrega reporte fotográfico de presiones y amperaje.",

    generandoPdf: false,
    notificacion: {
      visible: false,
      mensaje: "",
      tipo: "exito"
    },

    init() {
      // Inicializar fecha actual en formato YYYY-MM-DD respetando zona horaria local
      const hoy = new Date();
      const offset = hoy.getTimezoneOffset() * 60000;
      const localISOTime = new Date(hoy - offset).toISOString().slice(0, 10);
      this.fecha = localISOTime;
      this.generarNuevoFolio();

      // Actualizar prefijo del folio al cambiar entre Cotización y Nota de Remisión
      this.$watch("tipoDocumento", (nuevoTipo) => {
        const prefijo = nuevoTipo === "cotizacion" ? "COT" : "REM";
        const partes = this.folio.split("-");
        if (partes.length === 3) {
          this.folio = `${prefijo}-${partes[1]}-${partes[2]}`;
        } else {
          this.generarNuevoFolio();
        }
      });
    },

    generarNuevoFolio() {
      const anio = new Date().getFullYear();
      const numAleatorio = String(Math.floor(Math.random() * 900) + 100);
      const prefijo = this.tipoDocumento === "cotizacion" ? "COT" : "REM";
      this.folio = `${prefijo}-${anio}-${numAleatorio}`;
    },

    get catalogoFiltrado() {
      const q = this.busquedaCatalogo.trim().toLowerCase();
      if (!q) return this.config.catalogo;
      return this.config.catalogo.filter(
        (item) =>
          item.concepto.toLowerCase().includes(q) ||
          item.categoria.toLowerCase().includes(q) ||
          item.id.toLowerCase().includes(q)
      );
    },

    agregarDesdeCatalogo(item) {
      // Verificar si ya existe el mismo concepto para incrementar su cantidad
      const existente = this.partidas.find(
        (p) => p.concepto.trim().toLowerCase() === item.concepto.trim().toLowerCase() && Number(p.precio) === Number(item.precio)
      );

      if (existente) {
        existente.cantidad = Number(existente.cantidad) + 1;
        this.mostrarToast(`Se aumentó la cantidad de "${item.categoria}" (+1)`, "info");
      } else {
        this.partidas.push({
          id: Date.now() + Math.random(),
          concepto: item.concepto,
          unidad: item.unidad || "Servicio",
          cantidad: 1,
          precio: Number(item.precio)
        });
        this.mostrarToast("Concepto agregado a la lista", "exito");
      }
      this.busquedaCatalogo = "";
      this.mostrarResultadosCatalogo = false;
    },

    agregarConceptoManual() {
      const desc = this.nuevoConcepto.concepto.trim();
      const cant = parseFloat(this.nuevoConcepto.cantidad);
      const precio = parseFloat(this.nuevoConcepto.precio);

      if (!desc) {
        this.mostrarToast("Escribe la descripción del concepto o servicio", "alerta");
        return;
      }
      if (isNaN(cant) || cant <= 0) {
        this.mostrarToast("Ingresa una cantidad válida mayor a 0", "alerta");
        return;
      }
      if (isNaN(precio) || precio < 0) {
        this.mostrarToast("Ingresa un precio unitario válido", "alerta");
        return;
      }

      this.partidas.push({
        id: Date.now() + Math.random(),
        concepto: desc,
        unidad: this.nuevoConcepto.unidad || "Servicio",
        cantidad: cant,
        precio: precio
      });

      this.nuevoConcepto.concepto = "";
      this.nuevoConcepto.cantidad = 1;
      this.nuevoConcepto.precio = "";
      this.mostrarToast("Concepto libre agregado correctamente", "exito");
    },

    eliminarPartida(index) {
      this.partidas.splice(index, 1);
    },

    limpiarPartidas() {
      if (this.partidas.length === 0) return;
      this.partidas = [];
      this.descuentoPorcentaje = 0;
      this.anticipo = 0;
      this.mostrarToast("Lista de conceptos reiniciada", "info");
    },

    cargarDemoRapido() {
      this.cliente = {
        nombre: "Hotel Olmeca Plaza — Gerencia de Mantenimiento",
        telefono: "9933129080",
        direccion: "Av. Francisco I. Madero #418, Col. Centro, Villahermosa, Tab.",
        atencion: "Climatización Sala de Juntas y Lobby"
      };
      this.partidas = [
        {
          id: Date.now() + 1,
          concepto: this.config.catalogo[9].concepto,
          unidad: "Equipo",
          cantidad: 2,
          precio: 7450.00
        },
        {
          id: Date.now() + 2,
          concepto: this.config.catalogo[2].concepto,
          unidad: "Servicio",
          cantidad: 2,
          precio: 1450.00
        },
        {
          id: Date.now() + 3,
          concepto: this.config.catalogo[6].concepto,
          unidad: "Lote",
          cantidad: 1,
          precio: 1950.00
        }
      ];
      this.descuentoPorcentaje = 5;
      this.agregarIva = true;
      this.anticipo = 10000;
      this.generarNuevoFolio();
      this.mostrarToast("Ejemplo comercial cargado con éxito", "exito");
    },

    // CÁLCULOS FINANCIEROS EN TIEMPO REAL
    get subtotal() {
      return this.partidas.reduce((acc, item) => {
        const c = parseFloat(item.cantidad) || 0;
        const p = parseFloat(item.precio) || 0;
        return acc + c * p;
      }, 0);
    },

    get montoDescuento() {
      const porc = Math.min(Math.max(parseFloat(this.descuentoPorcentaje) || 0, 0), 100);
      return this.subtotal * (porc / 100);
    },

    get subtotalConDescuento() {
      return Math.max(0, this.subtotal - this.montoDescuento);
    },

    get montoIva() {
      return this.agregarIva ? this.subtotalConDescuento * 0.16 : 0;
    },

    get granTotal() {
      return this.subtotalConDescuento + this.montoIva;
    },

    get anticipoValido() {
      return Math.max(0, parseFloat(this.anticipo) || 0);
    },

    get saldoPendiente() {
      return Math.max(0, this.granTotal - this.anticipoValido);
    },

    get fechaFormateada() {
      if (!this.fecha) return "";
      const [y, m, d] = this.fecha.split("-").map(Number);
      const dateObj = new Date(y, m - 1, d);
      return dateObj.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    },

    get fechaVigenciaFormateada() {
      if (!this.fecha) return "";
      const [y, m, d] = this.fecha.split("-").map(Number);
      const dateObj = new Date(y, m - 1, d);
      const dias = parseInt(this.vigenciaDias, 10) || 15;
      dateObj.setDate(dateObj.getDate() + dias);
      return dateObj.toLocaleDateString("es-MX", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    },

    moneda(valor) {
      const num = Number(valor) || 0;
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(num);
    },

    mostrarToast(mensaje, tipo = "exito") {
      this.notificacion.mensaje = mensaje;
      this.notificacion.tipo = tipo;
      this.notificacion.visible = true;
      setTimeout(() => {
        this.notificacion.visible = false;
      }, 3400);
    },

    get nombreArchivoPdf() {
      const tipoStr = this.tipoDocumento === "cotizacion" ? "Cotizacion" : "NotaRemision";
      const folioLimpio = (this.folio || "SN").replace(/[^a-zA-Z0-9-_]/g, "");
      const clienteLimpio = (this.cliente.nombre || "Cliente")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, 28);
      return `${tipoStr}_${folioLimpio}_${clienteLimpio || "General"}.pdf`;
    },

    async descargarPDF() {
      if (this.partidas.length === 0) {
        this.mostrarToast("Agrega al menos un concepto antes de generar el PDF", "alerta");
        return;
      }

      this.generandoPdf = true;
      const pestanaAnterior = this.activeMobileTab;

      // Si estamos en móvil y la vista previa está oculta, activarla temporalmente para que html2canvas capture dimensiones reales
      this.activeMobileTab = "preview";
      await this.$nextTick();

      const elemento = document.getElementById("documento-imprimible");
      const filename = this.nombreArchivoPdf;

      const opciones = {
        margin: [8, 8, 8, 8],
        filename: filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2.5,
          useCORS: true,
          letterRendering: true,
          scrollY: 0,
          windowWidth: 920
        },
        jsPDF: {
          unit: "mm",
          format: "letter",
          orientation: "portrait"
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }
      };

      try {
        await html2pdf().set(opciones).from(elemento).save();
        this.mostrarToast(`PDF descargado: ${filename}`, "exito");
      } catch (error) {
        console.error("Error al generar el PDF:", error);
        this.mostrarToast("Ocurrió un error al generar el PDF. Intenta de nuevo.", "alerta");
      } finally {
        this.generandoPdf = false;
        this.activeMobileTab = pestanaAnterior;
      }
    },

    enviarWhatsApp() {
      if (this.partidas.length === 0) {
        this.mostrarToast("Agrega al menos un concepto para armar el resumen de WhatsApp", "alerta");
        return;
      }

      // Limpiar teléfono del cliente y agregar lada de México (52) si tiene 10 dígitos
      let telDigits = (this.cliente.telefono || "").replace(/\D/g, "");
      if (telDigits.length === 10) {
        telDigits = "52" + telDigits;
      }

      const esCotizacion = this.tipoDocumento === "cotizacion";
      const tituloDoc = esCotizacion ? "COTIZACIÓN FORMAL" : "NOTA DE REMISIÓN / RECIBO";

      let lineas = [];
      lineas.push(`*${this.config.empresa.nombre}*`);
      lineas.push(`📄 *${tituloDoc}* — Folio: *${this.folio}*`);
      lineas.push(`📅 Fecha: ${this.fechaFormateada}`);
      if (esCotizacion) {
        lineas.push(`⏳ Vigencia: ${this.fechaVigenciaFormateada} (${this.vigenciaDias} días)`);
      }
      lineas.push(`────────────────────`);
      lineas.push(`👤 *Cliente:* ${this.cliente.nombre || " Mostrador / A quien corresponda"}`);
      if (this.cliente.direccion) {
        lineas.push(`📍 *Ubicación/Obra:* ${this.cliente.direccion}`);
      }
      lineas.push(`────────────────────`);
      lineas.push(`*DESGLOSE DE CONCEPTOS:*`);

      this.partidas.forEach((p, idx) => {
        const cant = parseFloat(p.cantidad) || 0;
        const unit = parseFloat(p.precio) || 0;
        const imp = cant * unit;
        lineas.push(`${idx + 1}. *${cant}x* ${p.concepto} — *${this.moneda(imp)}*`);
      });

      lineas.push(`────────────────────`);
      lineas.push(`Subtotal: ${this.moneda(this.subtotal)}`);

      if (this.montoDescuento > 0) {
        lineas.push(`Descuento (${this.descuentoPorcentaje}%): -${this.moneda(this.montoDescuento)}`);
      }

      if (this.agregarIva) {
        lineas.push(`IVA (16%): ${this.moneda(this.montoIva)}`);
      } else {
        lineas.push(`Modalidad: Precios Netos`);
      }

      lineas.push(`💰 *TOTAL: ${this.moneda(this.granTotal)} MXN*`);

      if (this.anticipoValido > 0) {
        lineas.push(`✅ Anticipo / Abono: -${this.moneda(this.anticipoValido)}`);
        lineas.push(`📌 *SALDO PENDIENTE POR PAGAR: ${this.moneda(this.saldoPendiente)} MXN*`);
      }

      lineas.push(`────────────────────`);
      lineas.push(`🏦 *Datos de Transferencia:*`);
      lineas.push(`${this.config.empresa.datosBancarios.banco} | CLABE: ${this.config.empresa.datosBancarios.clabe}`);
      lineas.push(`Titular: ${this.config.empresa.datosBancarios.titular}`);
      lineas.push(``);
      lineas.push(`📎 *En seguida le adjunto su archivo PDF oficial (${this.nombreArchivoPdf}) con el detalle completo y sello de garantía.*`);

      const textoCodificado = encodeURIComponent(lineas.join("\n"));
      const urlWhatsApp = telDigits
        ? `https://wa.me/${telDigits}?text=${textoCodificado}`
        : `https://wa.me/?text=${textoCodificado}`;

      window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
      this.mostrarToast("Abriendo WhatsApp con el desglose listo...", "exito");
    }
  }));
});
