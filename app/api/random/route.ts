import { NextResponse } from "next/server";

const successPayload = { ok: true, result: "success" };
const failurePayload = { ok: false, result: "failure" };

const WEBHOOK_URL = process.env.MAINTAINAI_WEBHOOK_URL || "http://localhost:3000/api/webhook/api-monitoring";
const WEBHOOK_TOKEN = process.env.MAINTAINAI_WEBHOOK_TOKEN || "";

async function reportToMaintainAI(payload: {
  name: string;
  url: string;
  method: string;
  status: "up" | "down";
  status_code: number;
  response_time_ms: number;
  error?: string | null;
}) {
  if (!WEBHOOK_TOKEN) return;
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${WEBHOOK_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (_) {}
}

export async function GET(request: Request) {
  const start = Date.now();
  const url = request.url;
  const response_time_ms = Date.now() - start;

  const random = Math.random();

  if (random < 0.5) {
    await reportToMaintainAI({
      name: "Random API",
      url,
      method: "GET",
      status: "up",
      status_code: 200,
      response_time_ms,
    });
    return NextResponse.json(successPayload, { status: 200 });
  } else if (random < 0.75) {
    await reportToMaintainAI({
      name: "Third CTA",
      url,
      method: "GET",
      status: "up",
      status_code: 200,
      response_time_ms,
    });
    return NextResponse.json(successPayload, { status: 200 });
  } else {
    await reportToMaintainAI({
      name: "Failure",
      url,
      method: "GET",
      status: "down",
      status_code: 400,
      response_time_ms,
      error: "failure",
    });
    return NextResponse.json(failurePayload, { status: 400 });
  }
}