import { createRoot } from 'react-dom/client';

import './styles/index.scss';
import 'bulma';
import { Root } from './Root';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(<Root />);
