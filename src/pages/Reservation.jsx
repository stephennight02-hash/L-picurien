import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import Button from '../components/Button'

/* ── Table Layout Data ── */
const tables = [
  { id: 1, type: 'round', seats: 2, x: 80, y: 90, r: 28, label: 'T1' },
  { id: 2, type: 'round', seats: 2, x: 200, y: 80, r: 28, label: 'T2' },
  { id: 3, type: 'rect', seats: 4, x: 310, y: 60, w: 70, h: 45, label: 'T3' },
  { id: 4, type: 'round', seats: 2, x: 80, y: 200, r: 28, label: 'T4' },
  { id: 5, type: 'rect', seats: 6, x: 180, y: 190, w: 90, h: 45, label: 'T5' },
  { id: 6, type: 'round', seats: 2, x: 370, y: 180, r: 28, label: 'T6' },
  { id: 7, type: 'rect', seats: 4, x: 60, y: 310, w: 70, h: 45, label: 'T7' },
  { id: 8, type: 'round', seats: 4, x: 220, y: 320, r: 34, label: 'T8' },
  { id: 9, type: 'rect', seats: 8, x: 330, y: 300, w: 100, h: 50, label: 'T9' },
  { id: 10, type: 'round', seats: 2, x: 140, y: 420, r: 28, label: 'T10' },
  { id: 11, type: 'rect', seats: 4, x: 280, y: 420, w: 70, h: 45, label: 'T11' },
]

/* ── Simulated Occupied Tables Per Date ── */
const occupiedByDate = {
  '2026-03-15': [2, 5, 8, 11],
  '2026-03-16': [1, 3, 6, 9],
  '2026-03-17': [4, 7, 10],
  '2026-03-18': [2, 3, 5, 8, 9, 11],
  '2026-03-19': [1, 6],
  '2026-03-20': [3, 5, 7, 8, 10, 11],
  '2026-03-21': [1, 2, 4, 6, 9],
}

function getChairPositions(table) {
  const chairs = []
  const chairR = 8
  const gap = 6

  if (table.type === 'round') {
    const angleStep = (2 * Math.PI) / table.seats
    for (let i = 0; i < table.seats; i++) {
      const angle = angleStep * i - Math.PI / 2
      chairs.push({
        cx: table.x + Math.cos(angle) * (table.r + chairR + gap),
        cy: table.y + Math.sin(angle) * (table.r + chairR + gap),
      })
    }
  } else {
    const cx = table.x + table.w / 2
    const cy = table.y + table.h / 2
    const seatsPerSide = Math.ceil(table.seats / 2)
    for (let i = 0; i < seatsPerSide; i++) {
      const xOff = ((i - (seatsPerSide - 1) / 2) * table.w) / seatsPerSide
      chairs.push({ cx: cx + xOff, cy: table.y - chairR - gap })
      if (chairs.length < table.seats) {
        chairs.push({ cx: cx + xOff, cy: table.y + table.h + chairR + gap })
      }
    }
  }
  return chairs
}

export default function Reservation() {
  const today = new Date().toISOString().split('T')[0]
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedTable, setSelectedTable] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const occupied = useMemo(() => {
    return occupiedByDate[selectedDate] || [2, 5, 9]
  }, [selectedDate])

  const handleTableClick = (table) => {
    if (occupied.includes(table.id)) return
    setSelectedTable(table.id === selectedTable ? null : table.id)
    setConfirmed(false)
  }

  const handleConfirm = () => {
    setConfirmed(true)
  }

  const getTableColor = (id) => {
    if (occupied.includes(id)) return { fill: '#D9534F', stroke: '#B94A48', cursor: 'not-allowed' }
    if (id === selectedTable) return { fill: '#7D8E72', stroke: '#5A6B4E', cursor: 'pointer' }
    return { fill: '#A8C49A', stroke: '#7D8E72', cursor: 'pointer' }
  }

  const selectedTableData = tables.find((t) => t.id === selectedTable)

  /* ── Generate next 7 dates ── */
  const dateOptions = useMemo(() => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const d = new Date()
      d.setDate(d.getDate() + i)
      dates.push(d.toISOString().split('T')[0])
    }
    return dates
  }, [])

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + 'T12:00:00')
    return d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
  }

  return (
    <div className="min-h-screen pt-6 md:pt-24 pb-28 md:pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-20">
        {/* Header */}
        <SectionReveal>
          <span className="font-body text-xs font-medium tracking-[0.3em] uppercase text-sauge mb-3 block">
            Votre Soirée
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-noir leading-tight">
            Réservation
          </h1>
          <p className="font-body text-base text-gris mt-3 max-w-lg">
            Choisissez votre date et sélectionnez la table de votre choix pour une expérience sur-mesure.
          </p>
        </SectionReveal>

        {/* Date Selector */}
        <SectionReveal delay={0.1}>
          <div className="mt-8 mb-6">
            <h3 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-gris mb-3">
              Sélectionnez une date
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 snap-gallery">
              {dateOptions.map((date) => (
                <motion.button
                  key={date}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => {
                    setSelectedDate(date)
                    setSelectedTable(null)
                    setConfirmed(false)
                  }}
                  className={`shrink-0 px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
                    selectedDate === date
                      ? 'bg-sauge text-blanc shadow-md'
                      : 'bg-blanc text-noir/60 hover:bg-sable-dark hover:text-noir'
                  }`}
                >
                  {formatDate(date)}
                </motion.button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Floor Plan */}
        <SectionReveal delay={0.2}>
          <div className="bg-blanc rounded-2xl p-4 md:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-xl font-semibold text-noir">
                Plan de salle
              </h3>
              <div className="flex items-center gap-4 text-xs font-body">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#A8C49A]" /> Libre
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#D9534F]" /> Occupé
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-sauge" /> Sélectionné
                </span>
              </div>
            </div>

            {/* SVG Floor Plan */}
            <div className="w-full overflow-x-auto">
              <svg
                viewBox="0 0 460 500"
                className="w-full max-w-[460px] mx-auto"
                style={{ minWidth: '300px' }}
              >
                {/* Room Background */}
                <rect x="10" y="10" width="440" height="480" rx="16" fill="#F4F1EA" stroke="#D4D0C8" strokeWidth="2" />

                {/* Entrance */}
                <rect x="190" y="470" width="80" height="20" rx="4" fill="#D4D0C8" />
                <text x="230" y="485" textAnchor="middle" className="text-[10px]" fill="#8A8A8A" fontFamily="Montserrat, sans-serif" fontSize="9">
                  ENTRÉE
                </text>

                {/* Bar Area */}
                <rect x="30" y="20" width="400" height="8" rx="4" fill="#8A8A8A" opacity="0.3" />
                <text x="230" y="42" textAnchor="middle" fill="#8A8A8A" fontFamily="Montserrat, sans-serif" fontSize="8" letterSpacing="2">
                  BAR
                </text>

                {/* Kitchen */}
                <rect x="380" y="60" width="60" height="120" rx="8" fill="none" stroke="#D4D0C8" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="410" y="125" textAnchor="middle" fill="#B5B5B5" fontFamily="Montserrat, sans-serif" fontSize="8">
                  CUISINE
                </text>

                {/* Tables */}
                {tables.map((table) => {
                  const colors = getTableColor(table.id)
                  const chairs = getChairPositions(table)
                  const isOccupied = occupied.includes(table.id)

                  return (
                    <g
                      key={table.id}
                      onClick={() => handleTableClick(table)}
                      style={{ cursor: colors.cursor }}
                      role="button"
                      aria-label={`Table ${table.id}, ${table.seats} places, ${isOccupied ? 'occupée' : 'libre'}`}
                    >
                      {/* Chairs */}
                      {chairs.map((chair, ci) => (
                        <circle
                          key={ci}
                          cx={chair.cx}
                          cy={chair.cy}
                          r={7}
                          fill={isOccupied ? '#E8A0A0' : table.id === selectedTable ? '#95A68A' : '#C5D9BC'}
                          stroke={colors.stroke}
                          strokeWidth="1"
                          opacity="0.7"
                        />
                      ))}

                      {/* Table Shape */}
                      {table.type === 'round' ? (
                        <circle
                          cx={table.x}
                          cy={table.y}
                          r={table.r}
                          fill={colors.fill}
                          stroke={colors.stroke}
                          strokeWidth="2"
                          className="transition-all duration-200"
                        />
                      ) : (
                        <rect
                          x={table.x}
                          y={table.y}
                          width={table.w}
                          height={table.h}
                          rx={8}
                          fill={colors.fill}
                          stroke={colors.stroke}
                          strokeWidth="2"
                          className="transition-all duration-200"
                        />
                      )}

                      {/* Table Label */}
                      <text
                        x={table.type === 'round' ? table.x : table.x + table.w / 2}
                        y={table.type === 'round' ? table.y + 4 : table.y + table.h / 2 + 4}
                        textAnchor="middle"
                        fill="white"
                        fontFamily="Montserrat, sans-serif"
                        fontSize="11"
                        fontWeight="600"
                      >
                        {table.label}
                      </text>

                      {/* Seat Count */}
                      <text
                        x={table.type === 'round' ? table.x : table.x + table.w / 2}
                        y={(table.type === 'round' ? table.y + table.r : table.y + table.h) + 20}
                        textAnchor="middle"
                        fill="#8A8A8A"
                        fontFamily="Montserrat, sans-serif"
                        fontSize="8"
                      >
                        {table.seats}p
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>
        </SectionReveal>

        {/* Selection Feedback */}
        <SectionReveal delay={0.3}>
          <div className="mt-6 bg-blanc rounded-2xl p-6 shadow-sm">
            {confirmed ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-sauge/15 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-sauge">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-noir mb-1">
                  Réservation confirmée !
                </h3>
                <p className="font-body text-sm text-gris">
                  Table {selectedTableData?.label} ({selectedTableData?.seats} places) — {formatDate(selectedDate)}
                </p>
                <p className="font-body text-xs text-sauge mt-2 font-medium">
                  Un SMS de confirmation vous sera envoyé au +32 470 30 30 19
                </p>
              </div>
            ) : selectedTable ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-noir">
                    {selectedTableData?.label} sélectionnée
                  </h3>
                  <p className="font-body text-sm text-gris">
                    {selectedTableData?.seats} places · {formatDate(selectedDate)}
                  </p>
                </div>
                <Button onClick={handleConfirm} size="md">
                  Confirmer la réservation
                </Button>
              </div>
            ) : (
              <p className="font-body text-sm text-gris text-center py-2">
                Sélectionnez une table libre sur le plan pour réserver.
              </p>
            )}
          </div>
        </SectionReveal>

        {/* Contact Note */}
        <SectionReveal delay={0.4}>
          <div className="mt-6 text-center">
            <p className="font-body text-sm text-gris">
              Pour les groupes de +8 personnes, appelez-nous directement.
            </p>
            <Button href="tel:+32470303019" variant="outline" size="md" className="mt-3">
              +32 470 30 30 19
            </Button>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}
