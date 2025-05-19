
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      color: '#1f2937',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>TravelWise ✈️</h1>
      <p style={{ fontStyle: 'italic', color: '#1d4ed8', fontSize: '1.25rem' }}>Allt sem þú þarft í þínu ferðalagi</p>
      <p style={{ maxWidth: '600px', marginTop: '1rem', fontSize: '1.125rem' }}>
        TravelWise er snjallt ferðaforrit sem notar gervigreind til að finna ódýr flug, hótel, gistingu, veitingastaði, fatabúðir og afþreyingu á hvaða stað sem er í heiminum.
      </p>
      <p style={{ color: '#4b5563', marginTop: '1.5rem' }}>
        Með TravelWise þarftu aldrei að eyða tíma í að googla áður en þú ferð – appið sér um það fyrir þig!
      </p>
      <a
        href="#"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563eb',
          color: 'white',
          borderRadius: '0.75rem',
          textDecoration: 'none',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        Sækja um API aðgang
      </a>
    </div>
  )
}
