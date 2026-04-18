/* ============================================
   PROJECT DATA CONFIGURATION
   Easily customize projects and research articles
   ============================================ */

const projectsData = {
    projects: [
        {
            title: "Active Directory Exploitation Framework",
            description: "Comprehensive red team toolkit for AD enumeration, exploitation, and lateral movement. Automated Kerberoasting, delegation abuse, and credential stuffing.",
            tools: ["Impacket", "BloodHound", "Responder", "Cobalt Strike"],
            github: "https://github.com/yourusername/ad-exploit-framework",
            writeup: "https://yourblog.com/ad-exploitation-writeup"
        },
        {
            title: "Cloud Infrastructure Reconnaissance",
            description: "Automated AWS/Azure/GCP enumeration and misconfiguration detection. Identifies overly permissive IAM policies, exposed S3 buckets, and container vulnerabilities.",
            tools: ["Pacu", "CloudMapper", "Prowler", "Terraform"],
            github: "https://github.com/yourusername/cloud-recon",
            writeup: "https://yourblog.com/cloud-security-writeup"
        },
        {
            title: "Phishing Campaign Automation",
            description: "Full-stack phishing infrastructure with evasion techniques, credential harvesting, and MFA bypass capabilities. Integrates with C2 for post-exploitation.",
            tools: ["Evilginx2", "GoPhish", "Empire", "Custom Scripts"],
            github: "https://github.com/yourusername/phishing-automation",
            writeup: "https://yourblog.com/phishing-campaign-writeup"
        },
        {
            title: "Persistence & Privilege Escalation Suite",
            description: "Modular toolkit for establishing persistent access across Windows, Linux, and macOS. Includes rootkit development, scheduled task abuse, and WMI event subscriptions.",
            tools: ["Metasploit", "Empire", "Sliver", "Custom C"],
            github: "https://github.com/yourusername/persistence-suite",
            writeup: "https://yourblog.com/persistence-techniques-writeup"
        },
        {
            title: "Data Exfiltration via Covert Channels",
            description: "Advanced data staging and exfiltration using DNS tunneling, ICMP covert channels, and steganography. Bypasses DLP and network monitoring.",
            tools: ["DNSExfil", "Iodine", "SilentTrinity", "Custom Python"],
            github: "https://github.com/yourusername/covert-exfil",
            writeup: "https://yourblog.com/exfiltration-techniques-writeup"
        },
        {
            title: "Exploit Development & Weaponization",
            description: "Custom exploit development for 0-day vulnerabilities. Includes shellcode generation, obfuscation, and integration with Cobalt Strike.",
            tools: ["Metasploit", "Ghidra", "IDA Pro", "Custom Assembly"],
            github: "https://github.com/yourusername/exploit-dev",
            writeup: "https://yourblog.com/exploit-development-writeup"
        }
    ],

    research: [
        {
            title: "Bypassing Modern EDR Solutions: A Deep Dive",
            date: "March 2024",
            excerpt: "Comprehensive analysis of EDR evasion techniques including memory-only attacks, API hooking bypass, and behavioral analysis circumvention. Includes proof-of-concept code.",
            link: "https://yourblog.com/edr-evasion-deep-dive"
        },
        {
            title: "Kerberoasting in 2024: New Techniques and Defenses",
            date: "February 2024",
            excerpt: "Updated methodology for Kerberoasting attacks post-Windows updates. Covers service account enumeration, ticket cracking optimization, and detection evasion.",
            link: "https://yourblog.com/kerberoasting-2024"
        },
        {
            title: "Supply Chain Attacks: From Reconnaissance to Execution",
            date: "January 2024",
            excerpt: "Detailed walkthrough of identifying and exploiting supply chain vulnerabilities. Real-world case studies and defensive recommendations.",
            link: "https://yourblog.com/supply-chain-attacks"
        },
        {
            title: "Lateral Movement Without Credentials: Living Off the Land",
            date: "December 2023",
            excerpt: "Advanced techniques for lateral movement using only built-in OS tools. Covers WMI, PowerShell remoting, and SSH key abuse.",
            link: "https://yourblog.com/lotl-lateral-movement"
        },
        {
            title: "Cloud Security Misconfigurations: A Pentester's Goldmine",
            date: "November 2023",
            excerpt: "Comprehensive guide to identifying and exploiting common cloud misconfigurations. AWS, Azure, and GCP specific vulnerabilities.",
            link: "https://yourblog.com/cloud-misconfigurations"
        },
        {
            title: "Building a Custom C2 Framework from Scratch",
            date: "October 2023",
            excerpt: "Step-by-step guide to developing a custom Command & Control framework. Covers architecture, encryption, and evasion techniques.",
            link: "https://yourblog.com/custom-c2-framework"
        }
    ]
};

/* ============================================
   CUSTOMIZATION GUIDE
   ============================================

1. PROJECTS:
   - Replace 'title' with your project name
   - Update 'description' with what the project does
   - Modify 'tools' array with technologies used
   - Update 'github' with your GitHub repository link
   - Update 'writeup' with your blog post or documentation link

2. RESEARCH:
   - Change 'title' to your article title
   - Update 'date' in "Month Year" format
   - Write a brief 'excerpt' (1-2 sentences)
   - Update 'link' to your blog post URL

3. SOCIAL LINKS:
   - Edit the contact section in index.html to update:
     * Email address
     * GitHub profile
     * LinkedIn profile
     * Twitter/X handle

4. CERTIFICATIONS:
   - Update credential IDs in the certifications section
   - Add or remove certification cards as needed

5. HTB/THM STATS:
   - Update rank, machine count, and points in the HTB/THM section
   - Replace profile links with your actual profiles

6. COLORS & THEME:
   - Modify CSS variables in styles.css (--primary-dark, --accent-emerald, etc.)
   - Adjust animations and transitions to your preference

7. FONTS:
   - Currently using JetBrains Mono and Inter
   - Change in styles.css @import and :root font variables

8. PGP KEY:
   - Replace the placeholder PGP key in index.html with your actual key
   - Users can click to copy

9. SECURITY.TXT:
   - Create a .well-known/security.txt file with your security contact info
   - Example: https://example.com/.well-known/security.txt

10. DEPLOYMENT:
    - Simply upload all files to your hosting provider
    - No build process required (vanilla HTML/CSS/JS)
    - Works with any static hosting: GitHub Pages, Netlify, Vercel, etc.

   ============================================ */
