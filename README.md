# Analytics Widget Plugin (vbwd-fe-admin)

Dashboard analytics widget showing key platform metrics.

## Purpose

Adds a summary analytics widget to the admin dashboard: active subscriptions, revenue this month, new signups, and token usage overview.

---

## Related

| | Repository |
|-|------------|
| 🖥 Backend | [vbwd-plugin-analytics](https://github.com/VBWD-platform/vbwd-plugin-analytics) |

**Core:** [vbwd-fe-admin](https://github.com/VBWD-platform/vbwd-fe-admin) · [vbwd-fe-core](https://github.com/VBWD-platform/vbwd-fe-core)

## Extension Point

Registers `AnalyticsWidget.vue` as a dashboard widget via the plugin system.

## Testing

```bash
cd vbwd-fe-admin
./bin/pre-commit-check.sh --unit
```

## Documentation

Full platform documentation lives at **[vbwd.cc/docs](https://vbwd.cc/docs)**.

- [Frontend plugins](https://vbwd.cc/docs-frontend-plugins) — how fe-admin / fe-user plugins are built and mounted
- [Architecture](https://vbwd.cc/docs-architecture) — platform layering and the core-agnosticism rule
- [Getting started](https://vbwd.cc/docs-getting-started) — install a VBWD instance and enable plugins
