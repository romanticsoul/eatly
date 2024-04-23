import { Food } from '@/types/mockapi'
import { cn } from '@/lib/utils'

export function Tag({ text }: { text: Food['tag'] }) {
  const tagColor = cn(
    text === 'Healthy'
      ? 'bg-[#F7EDD0] text-[#DAA31A]'
      : text === 'Trending'
        ? 'bg-[#F7C5BA] text-[#FB471D]'
        : text === 'Supreme'
          ? 'bg-[#D6EEE0] text-[#309D5B]'
          : '',
  )

  return (
    <span className={cn('rounded-[6px] px-2 py-1 text-sm', tagColor)}>
      {text}
    </span>
  )
}
