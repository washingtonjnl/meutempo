import { ReactNode } from 'react';

import { Container } from './styles';

interface SettingsProps {
  children: ReactNode;
}

function Settings({ children }: SettingsProps) {
  return (
    <Container>
      <h1>Settings</h1>
      {children}
    </Container>
  );
};

export default Settings;
