export interface TabNavProps<T extends readonly string[]> {
  tabs: T;
  currentStep: string;
  setStep: (step: T[number]) => void;
}
