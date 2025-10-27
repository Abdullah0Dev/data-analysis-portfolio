"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {
    CONTACT_ADDRESS,
    navItems,
    OWNER_NAME,
    RESUME_LINK,
} from "@/constants";
import { useState } from "react";

export function CustomNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo name={OWNER_NAME} />
                <div className="relative">
                    <NavItems items={navItems} />
                </div>
                <div className="flex items-center gap-4">
                    <NavbarButton
                        as={"a"}
                        href={RESUME_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                    >
                        View Resume
                    </NavbarButton>
                    <NavbarButton
                        as={"a"}
                        href={CONTACT_ADDRESS}
                        variant="primary"
                    >
                        Contact
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-neutral-600 w-full dark:text-neutral-300"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    <div className="flex w-full flex-col gap-4">
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            as={"a"}
                            href={RESUME_LINK}
                            variant="primary"
                            className="w-full"
                        >
                            View Resume
                        </NavbarButton>
                        <NavbarButton
                            as={"a"}
                            href={CONTACT_ADDRESS}
                            variant="primary"
                            className="w-full"
                        >
                            Contact
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
