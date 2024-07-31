import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppState } from '../../state';

export default function LoginPage() {
  const { user } = useAppState();
  const history = useHistory();

  useEffect(() => {
    // Redirect to the home page or another page immediately since we're skipping the login
    history.replace('/');
  }, [history]);

  return null; // No need to render anything, as we're directly redirecting
}
