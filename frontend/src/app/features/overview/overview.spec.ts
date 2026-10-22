import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { Overview } from './overview';

describe('Overview', () => {
  it('shows the SendIt welcome screen', async () => {
    await TestBed.configureTestingModule({
      imports: [Overview],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Overview);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Welcome to SendIt');
  });
});
