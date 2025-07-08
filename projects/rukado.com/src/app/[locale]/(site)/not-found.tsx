import { HttpError } from '@/components/common/errors/HttpError';

export default function NotFoundPage() {
  return <HttpError code={404} />;
}
