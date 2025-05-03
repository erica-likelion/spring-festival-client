import { useState } from 'react';
import { MultiTabs } from '@/components/tabs/Tabs';

const DAY_OPTIONS = ['1일차', '2일차', '3일차'] as const;

export default function Main() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>공연 일자 선택</h2>
      <MultiTabs
        tabs={[...DAY_OPTIONS]}
        activeTab={selectedDays}
        onTabClick={(updated) => setSelectedDays(updated)}
        toggle
      />

      <div style={{ marginTop: '1rem' }}>
        <strong>선택된 일자:</strong> {selectedDays.length > 0 ? selectedDays.join(', ') : '없음'}
      </div>
    </div>
  );
}
