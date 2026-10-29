<?php
declare(strict_types=1);
namespace Kbarre\Contact;

final class Failure extends \RuntimeException
{
    public function __construct(public readonly int $status, public readonly string $reason, public readonly int $retryAfter = 0)
    {
        parent::__construct($reason);
    }
}

