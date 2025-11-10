const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 p-5">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-10 shadow-lg">
        <h1 className="mb-8 border-b-4 border-blue-500 pb-4 text-4xl font-bold text-slate-700">
          Datenschutzerklärung
        </h1>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            1. Verantwortlicher und Kontakt
          </h3>
          <p className="text-gray-700">
            Marvin Warnke<br />
            Email: mawrx.dev@gmail.com
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            2. Welche Daten werden verarbeitet?
          </h3>
          <p className="mb-4 text-gray-700">
            Die Wohngeldrechner-App verarbeitet folgende Daten ausschließlich lokal auf Ihrem Gerät:
          </p>

          <p className="mb-2 font-semibold text-gray-800">Persönliche Informationen:</p>
          <ul className="mb-4 ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Namen von Haushaltsmitgliedern</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Anzahl der Haushaltsmitglieder</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Informationen über Behinderungen von Haushaltsmitgliedern</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Familienstand (Alleinerziehend)</span>
            </li>
          </ul>

          <p className="mb-2 font-semibold text-gray-800">Finanzielle Informationen:</p>
          <ul className="mb-4 ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Mietbetrag/Belastung (Kaltmiete)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Einkommen</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Einkommensteuer, Kranken- und Rentenversicherungsbeiträge</span>
            </li>
          </ul>

          <p className="mb-2 font-semibold text-gray-800">Standortinformationen:</p>
          <ul className="ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Postleitzahl</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Stadt/Landkreis</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Mietstufe</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            3. Wie werden diese Daten verarbeitet?
          </h3>

          <p className="mb-2 font-semibold text-gray-800">Lokale Speicherung:</p>
          <ul className="mb-4 ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Alle Ihre Daten werden ausschließlich auf Ihrem Gerät in einer lokalen Datenbank gespeichert</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Ihre Daten werden NICHT an Server oder Cloud-Dienste übertragen</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Ihre Daten werden NICHT mit externen Partnern geteilt</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Alle Berechnungen finden lokal auf Ihrem Gerät statt</span>
            </li>
          </ul>

          <p className="mb-2 font-semibold text-gray-800">Keine Weitergabe an Dritte:</p>
          <ul className="ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Ihre Daten werden nicht an Wohngeldämter, Behörden oder andere Stellen übertragen</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Die App sammelt keine Analysedaten über Ihr Nutzungsverhalten</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Es gibt keine Benutzerkonten oder Benutzer-IDs</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            4. Werbung (Google AdMob)
          </h3>
          <p className="mb-4 text-gray-700">
            Die App zeigt personalisierte Anzeigen mittels Google AdMob an. Dabei gilt:
          </p>
          <ul className="ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Werbung wird standardmäßig mit der Einstellung "non-personalized ads" angezeigt</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Google erhält keine Daten aus Ihrer Wohngeldberechnung</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>
                Mehr Informationen:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-dotted border-blue-500 text-blue-500 transition-all hover:border-solid hover:text-blue-700"
                >
                  https://policies.google.com/privacy
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            5. Datenspeicherung und Löschung
          </h3>

          <p className="mb-2 font-semibold text-gray-800">Speicherung:</p>
          <ul className="mb-4 ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Ihre aktuelle Berechnung bleibt gespeichert, bis Sie diese löschen</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Sie können auch einzelne gespeicherte Berechnungen jederzeit löschen</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Die Daten werden beim Deinstallieren der App gelöscht</span>
            </li>
          </ul>

          <p className="mb-2 font-semibold text-gray-800">Manuelle Löschung:</p>
          <ul className="ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Öffnen Sie den Verlauf in der App</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Wählen Sie bei der Berechnung "Löschen"</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Bestätigen Sie die Löschung</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            6. Ihre Rechte
          </h3>
          <p className="mb-4 text-gray-700">
            Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="mb-4 ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>
                <strong>Zugriff:</strong> Alle Ihre Daten sind in der App einsehbar
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>
                <strong>Änderung:</strong> Sie können Ihre Daten jederzeit in der App ändern
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>
                <strong>Löschung:</strong> Sie können Ihre Daten jederzeit löschen
              </span>
            </li>
          </ul>
          <p className="text-gray-700">
            Da Ihre Daten lokal gespeichert sind, können Sie diese vollständig kontrollieren.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            7. Sicherheit
          </h3>
          <ul className="ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Ihre Daten werden nur lokal auf Ihrem Gerät gespeichert</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Es gibt keine Datenübertragung über das Internet</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Die SQLite-Datenbank wird durch das Betriebssystem geschützt</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Nur die App selbst kann auf diese Daten zugreifen</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            8. Rechtliche Grundlage
          </h3>
          <p className="mb-4 text-gray-700">
            Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von:
          </p>
          <ul className="ml-6 list-none space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Ihrer Einwilligung zur Nutzung der App</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Erforderlichkeit zur Erbringung der Wohngeldberechnung</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-500">▸</span>
              <span>Berechtigtes Interesse an lokaler Datenverarbeitung</span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-blue-700">
            9. Änderungen dieser Datenschutzerklärung
          </h3>
          <p className="text-gray-700">
            Diese Datenschutzerklärung kann jederzeit aktualisiert werden. Wichtige Änderungen werden in den App-Release-Notes bekannt gegeben.
          </p>
        </div>

        <footer className="mt-12 border-t border-gray-200 pt-5 text-center text-sm text-gray-500">
          <p>Datenschutzerklärung für Wohngeldrechner App</p>
          <p>Zuletzt aktualisiert: 10.11.2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Datenschutz;
