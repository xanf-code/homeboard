export default function FlashEmoji({ severityNum, max }) {
  const flashes = Array.from({ length: severityNum }, (_, index) => (
    <span key={index} role="img" aria-label="flash">
      ⚡️
    </span>
  ));

  return (
    <div>
      {flashes}
      {flashes.length < max && (
        <span role="img" aria-label="empty">
          ❌
        </span>
      )}
    </div>
  );
}
