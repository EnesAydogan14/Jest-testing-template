import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    render(<ProfileCard name="Piet" age={30} />);
    
    const ageText = screen.getByText('Leeftijd: 30');
    expect(ageText).toBeInTheDocument();
  });

  test('toont bio als die er is', () => {
    render(
      <ProfileCard 
        name="Ali" 
        age={22} 
        bio="Ik hou van programmeren" 
      />
    );

    const bioText = screen.getByText('Ik hou van programmeren');
    expect(bioText).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard name="Sara" age={28} />);

    const fallback = screen.getByText('Geen bio beschikbaar');
    expect(fallback).toBeInTheDocument();
  });

});