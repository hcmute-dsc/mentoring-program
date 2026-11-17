import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LangProvider } from '../useLang';
import { RulesPage } from './RulesPage';
// The same fonts and colors as the map.
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '../styles.css';
import './rules.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <RulesPage />
    </LangProvider>
  </StrictMode>,
);
