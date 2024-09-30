type FilterProps = {
  onDistanceFilter: (unit: 'km' | 'lunar') => void;
};

export default function DistanceFilter({ onDistanceFilter }: FilterProps) {
  return (
    <div>
      <button type="button" onClick={() => onDistanceFilter('km')}>
        в километрах
      </button>{' '}
      |{' '}
      <button type="button" onClick={() => onDistanceFilter('lunar')}>
        в лунных орбитах
      </button>
    </div>
  );
}
