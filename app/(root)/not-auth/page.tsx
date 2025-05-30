import { InfoBlock } from '@/shared/components';

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="Доступ заборонений"
        text="Тільки авторизовані користувачі можуть переглянути цю сторінку"
        imageUrl="/assets/images/lock.png"
      />
    </div>
  );
}
