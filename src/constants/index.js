// assets import
import { PiUserCircleBold } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";
import { TbRocket } from "react-icons/tb";
import { MdBolt } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";
import { PiCodeBlockLight } from "react-icons/pi";
import { MdOutlineSearch } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { TbLockCode } from "react-icons/tb";
import { FaUser, FaUserTie } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import { MdIntegrationInstructions } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { PiUsersThreeFill } from "react-icons/pi";
import { FiZap } from "react-icons/fi";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoRocket } from "react-icons/go";

export const perks = [
  {
    icon: PiUserCircleBold,
    title: "I. Get Started Instantly",
    info: "Create your account and launch your AI coding environment in seconds.",
  },
  {
    icon: LuBrainCircuit,
    title: "II. Code With AI Precision",
    info: "AI assists your coding flow—writing, refactoring, and debugging in real-time.",
  },
  {
    icon: TbRocket,
    title: "III. Deploy With Confidence",
    info: "Ship high-quality, optimized code quickly and with full documentation.",
  },
];

export const reviews = [
  {
    name: "Alex Rivera",
    username: "@alexr",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&h=200&q=80",
    body: "This tool has completely transformed the way I manage my daily tasks. The UI is clean, intuitive, and genuinely helpful.",
    date: "Jan 5, 2024",
  },
  {
    name: "Sophie Bennett",
    username: "@sophieb",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
    body: "Honestly, I didn’t expect much at first, but after using it for a week, I can’t go back. Everything feels seamless and just works.",
    date: "Feb 22, 2024",
  },
  {
    name: "Liam Carter",
    username: "@liamc",
    avatar:
      "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=200&h=200&q=80",
    body: "I've used dozens of similar platforms, but this one stands out. The attention to detail and performance are unmatched.",
    date: "Mar 14, 2024",
  },
  {
    name: "Emily Zhang",
    username: "@emilyz",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=200&h=200&q=80",
    body: "Perfect for teams and individuals alike. I introduced it to my startup crew and everyone’s been loving it since day one.",
    date: "Apr 3, 2024",
  },
  {
    name: "Noah Wilson",
    username: "@noahw",
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&h=200&q=80",
    body: "Solid performance and smooth user experience. The latest update made it even more efficient — well done to the devs!",
    date: "May 20, 2024",
  },
  {
    name: "Isabella Moore",
    username: "@isabellam",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
    body: "I use it for tracking goals and habits — works flawlessly and helps keep me accountable every day. Highly recommend it.",
    date: "Jun 1, 2024",
  },
];

export const features = [
  {
    icon: MdBolt,
    title: "Lightning-Fast Performance",
    info: "Experience a blazing-fast editor optimized for speed, responsiveness, and uninterrupted coding.",
  },
  {
    icon: PiCodeBlockLight,
    title: "Clean, Optimized Code Generation",
    info: "Generate clean, readable, and efficient code tailored to your context and style.",
  },
  {
    icon: MdOutlineSearch,
    title: "AI-Powered Debugging",
    info: "Detect and fix issues instantly with intelligent, context-aware debugging suggestions.",
  },
  {
    icon: LuMonitorSmartphone,
    title: "Cross-Platform Experience",
    info: "Use the editor seamlessly across devices—desktop, tablet, or mobile—with a consistent experience.",
  },
  {
    icon: FaChartLine,
    title: "Real-Time Code Insights",
    info: "Visualize complexity, performance metrics, and improvements with integrated coding analytics.",
  },
  {
    icon: TbLockCode,
    title: "Secure & Private Suggestions",
    info: "Your code stays private—AI suggestions are local-first, secure, and never exposed to third parties.",
  },
];

export const plans = [
  {
    title: "Free Plan",
    price: "$0/mo",
    description:
      "Perfect for hobbyists and solo developers exploring AI tools.",
    features: [
      { icon: <FaUser />, text: "1 AI Workspace" },
      { icon: <FiZap />, text: "Basic Code Suggestions" },
      { icon: <AiOutlinePieChart />, text: "Usage Insights" },
      { icon: <GoRocket />, text: "Community Support" },
    ],
    buttonText: "Buy Now",
  },
  {
    title: "Pro Plan",
    price: "$19/mo",
    description:
      "Great for professionals who need real-time AI coding assistance.",
    features: [
      { icon: <FaUserTie />, text: "Up to 5 Workspaces" },
      { icon: <HiOutlineAdjustments />, text: "Live AI Pair Programming" },
      { icon: <MdIntegrationInstructions />, text: "GitHub Integration" },
      { icon: <BsStars />, text: "Pro Templates & Snippets" },
    ],
    buttonText: "Buy Now",
  },
  {
    title: "Enterprise Plan",
    price: "Custom",
    description: "For teams needing scalable AI-powered code infrastructure.",
    features: [
      { icon: <FaUserTie />, text: "Dedicated Account Manager" },
      { icon: <HiOutlineAdjustments />, text: "Custom AI Workflows" },
      {
        icon: <MdIntegrationInstructions />,
        text: "Advanced Third-party Integrations",
      },
      { icon: <BsStars />, text: "AI Performance Analytics" },
      { icon: <PiUsersThreeFill />, text: "Team Collaboration Tools" },
    ],
    buttonText: "Contact Sales",
  },
];

export const downloads = [
  {
    platform: "macOS",
    variant: "Mac Universal",
    arch: "universal",
    os: "mac",
  },
  {
    platform: "macOS",
    variant: "Mac x64",
    arch: "x64",
    os: "mac",
  },
  {
    platform: "macOS",
    variant: "Mac Arm64",
    arch: "arm64",
    os: "mac",
  },
  {
    platform: "Windows",
    variant: "Windows 10/11 (Arm64)",
    arch: "arm64",
    os: "windows",
  },
  {
    platform: "Windows",
    variant: "Windows 10/11 (x64)",
    arch: "x64",
    os: "windows",
  },
  {
    platform: "Linux",
    variant: ".AppImage (Arm64)",
    arch: "arm64",
    os: "linux",
  },
  {
    platform: "Linux",
    variant: ".AppImage (x64)",
    arch: "x64",
    os: "linux",
  },
];
