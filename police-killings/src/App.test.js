import React from 'react';
import { render, act } from '@testing-library/react';
import App from './App';
import PoliceKillingsContext from './police-killings-context';
import { readFileSync } from 'fs';
import parse from 'csv-parse/lib/sync'

describe('App', () => {

  it('should render as always without data', async () => {
      const tree = (
        <PoliceKillingsContext.Provider value={[[]]}>
        <App />
      </PoliceKillingsContext.Provider>
    )
    const { container } = render(tree);
    expect(container).toMatchSnapshot();
  });


  it('should render as always with data', async () => {
    const rawCsv = readFileSync(__dirname + './police_killings.csv', 'utf8');
    const json = parse(rawCsv, {columns: true});
    const tree = (
      <PoliceKillingsContext.Provider value={[json]}>
        <App />
      </PoliceKillingsContext.Provider>
    )
    const { container } = render(tree);
    expect(container).toMatchSnapshot();
  });
})