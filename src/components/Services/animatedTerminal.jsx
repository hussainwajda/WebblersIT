import { useEffect, useState } from "react"
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../ui/terminal.jsx"

export function TerminalDemo() {
  const [loopKey, setLoopKey] = useState(0)

  // Loop the entire terminal by remounting it on an interval
  useEffect(() => {
    const LOOP_DURATION_MS = 12000 // approximate full sequence duration
    const id = setInterval(() => {
      setLoopKey((prev) => prev + 1)
    }, LOOP_DURATION_MS)

    return () => clearInterval(id)
  }, [])

  return (
    <Terminal key={loopKey} className="bg-foreground/60 max-h-[320px]">
      <TypingAnimation>&gt; npm Website AutoPilot Mode init</TypingAnimation>

      <AnimatedSpan className="text-green-500 text-sm">
        &gt; Initializing automated workflows...
      </AnimatedSpan>

      <AnimatedSpan className="text-primary">
        ✔ Deploying smart scripts.
      </AnimatedSpan>

      <AnimatedSpan className="text-primary">
        ✔ Detecting repetitive tasks.
      </AnimatedSpan>

      <AnimatedSpan className="text-primary">
        ✔ Auto-updating content modules.
      </AnimatedSpan>

      <AnimatedSpan className="text-primary">
        ✔ Syncing data across platforms.
      </AnimatedSpan>

      <AnimatedSpan className="text-primary">
        ✔ Scheduling content updates.
      </AnimatedSpan>

      <AnimatedSpan className="text-primary">
        ✔ Updating tailwind.config.ts
      </AnimatedSpan>

      <TypingAnimation className="text-background">
        Automation Engine Running — Efficiency at max.
      </TypingAnimation>

      <TypingAnimation className="text-background">
        Success — Your website now works even when you don’t.
      </TypingAnimation>
    </Terminal>
  )
}
